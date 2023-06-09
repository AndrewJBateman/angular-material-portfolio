import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Project } from 'src/app/modules/projects/project.model';

@Injectable({
  providedIn: 'root'
})
export class FirestoreDataService {
  data$: Observable<any[]> = new Observable<any[]>();
  firestore: Firestore = inject(Firestore);
  id: number = 0;

  // get array collection Observable
  getData(collectionName: string): Observable<any[]> {
    const data = collection(this.firestore, collectionName);
    this.data$ = collectionData(data) as Observable<any[]>;
    return this.data$;
  }
}
