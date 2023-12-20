/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable, inject } from "@angular/core";
import { Firestore, collection, collectionData } from "@angular/fire/firestore";
import { Observable, map, shareReplay } from "rxjs";

interface Item {
	id?: number;
	title: string;
	subtitle: string;
	content: string;
	svgPath: string;
	published?: { minutes: number; seconds: number };
}

@Injectable({
	providedIn: "root",
})
export class FirestoreDataService {
	data$: Observable<Item[]> = new Observable<Item[]>();
	firestore: Firestore = inject(Firestore);
	id = 0;

	// get array collection from Firestore const {second} =
	// If collection items had an id then sort data by id (number or string)
	// Otherwise sort items by published date (only applies to posts)
	// use shareReplay to avoid repeated http calls for unchanged data
	getData(collectionName: string): Observable<any[]> {
		const data = collection(this.firestore, collectionName);
		const unsortedData$ = collectionData(data) as Observable<any[]>;
		const sortItems = (items: Item[]) => {
			return items[0].id
				? items.sort(this.sortById)
				: items.sort(this.sortByDate);
		};
		return unsortedData$.pipe(map(sortItems), shareReplay(1));
	}

	sortById(a: Item, b: Item) {
		return a.id && b.id ? (a.id < b.id ? -1 : 1) : 1;
	}

	sortByDate(a: Item, b: Item) {
		return a.published && b.published
			? a.published.seconds > b.published.seconds
				? -1
				: 1
			: 1;
	}
}
