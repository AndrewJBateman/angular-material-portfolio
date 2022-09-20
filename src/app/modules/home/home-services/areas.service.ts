import { AngularFireLiteFirestore } from "angularfire-lite";
import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject, share } from "rxjs";

import { Area } from "./../area.model";

@Injectable()
export class AreasService {
  private areasCollection: Observable<Area[]>;

  constructor(private firestore: AngularFireLiteFirestore) {}

  // get Areas collection Observable if it does not already exist and use RXJS share()
  // so the same Observable is shared the next time to avoid unnecessary HTTP requests
  getAreas(): Observable<Area[]> {
    if (this.areasCollection) {
      return this.areasCollection;
    } else {
      this.areasCollection = this.firestore.read("areas").pipe(share());
      return this.areasCollection;
    }
  }
}
