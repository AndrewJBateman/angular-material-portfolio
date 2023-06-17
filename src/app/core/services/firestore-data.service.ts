import { Injectable, inject } from "@angular/core";
import { Firestore, collection, collectionData } from "@angular/fire/firestore";
import { Observable, map } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class FirestoreDataService {
  data$: Observable<any[]> = new Observable<any[]>();
  firestore: Firestore = inject(Firestore);
  id: number = 0;

  // get array collection from Firestore const {second} =
  // If collection items had an id then sort data by id (number or string)
  // Otherwise sort items by published date (only applies to posts)
  getData(collectionName: string): Observable<any[]> {
    const data = collection(this.firestore, collectionName);
    const unsortedData$ = collectionData(data) as Observable<any[]>;
    this.data$ = unsortedData$.pipe(
      map((items) =>
        items[0].id ? items.sort(this.sortById) : items.sort(this.sortByDate)
      )
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
