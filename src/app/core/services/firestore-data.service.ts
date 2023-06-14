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

  // get array collection Observable and sort data by id (number or string)
  getData(collectionName: string): Observable<any[]> {
    const data = collection(this.firestore, collectionName);
    const unsortedData$ = collectionData(data) as Observable<any[]>;
    this.data$ = unsortedData$.pipe(
      map((items) => items.sort(this.sortById)),
    );
    return this.data$;
  }

  sortById(a: any, b: any) {
    return a.id < b.id ? -1 : 1;
  }
}
