/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable, inject } from "@angular/core";
import { Firestore, collection, collectionData } from "@angular/fire/firestore";
import { Observable, map, shareReplay } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class FirestoreDataService {
	data$: Observable<any[]> = new Observable<any[]>();
	firestore: Firestore = inject(Firestore);
	id = 0;

	// get array collection from Firestore const {second} =
	// If collection items had an id then sort data by id (number or string)
	// Otherwise sort items by published date (only applies to posts)
	// use shareReplay to avoid repeated http calls for unchanged data
	getData(collectionName: string): Observable<any[]> {
		const data = collection(this.firestore, collectionName);
		const unsortedData$ = collectionData(data) as Observable<any[]>;
		this.data$ = unsortedData$.pipe(
			map((items: any[]) =>
				items[0].id ? items.sort(this.sortById) : items.sort(this.sortByDate)
			),
			shareReplay(1)
		);
		return this.data$;
	}

	sortById(a: any, b: any) {
		return a.id < b.id ? -1 : 1;
	}

	sortByDate(a: any, b: any) {
		return a.published.seconds > b.published.seconds ? -1 : 1;
	}
}
