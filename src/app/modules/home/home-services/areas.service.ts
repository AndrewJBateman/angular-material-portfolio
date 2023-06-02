import { Injectable, inject } from "@angular/core";
import { Firestore, collectionData, collection, getDocs, orderBy } from "@angular/fire/firestore";
import { Observable, map } from "rxjs";

import { Area } from "./../area.model";

@Injectable({
  providedIn: "root",
})
export class AreasService {
  areas$: Observable<Area[]> = new Observable<Area[]>();
  firestore: Firestore = inject(Firestore);
  id: number = 0;

  // get Areas array collection Observable
  getAreas(): Observable<Area[]> {
    const areas = collection(this.firestore, "areas");
    this.areas$ = collectionData(areas) as Observable<Area[]>;
    return this.areas$;
  }
}
