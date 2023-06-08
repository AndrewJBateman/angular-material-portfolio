import { Injectable, inject } from "@angular/core";
import {
  Firestore,
  collectionData,
  collection,
} from "@angular/fire/firestore";
import { Observable } from "rxjs";

import { Project } from "../project.model";

@Injectable()
export class ProjectService {
  projects$: Observable<Project[]> = new Observable<Project[]>();
  firestore: Firestore = inject(Firestore);

  // get projects array collection Observable
  getProjects(): Observable<Project[]> {
    const projects = collection(this.firestore, "projects");
    this.projects$ = collectionData(projects) as Observable<Project[]>;
    return this.projects$;
  }
}
