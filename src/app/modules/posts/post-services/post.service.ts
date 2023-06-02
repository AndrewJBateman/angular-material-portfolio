import { Injectable, inject } from "@angular/core";
import {
  Firestore,
  collectionData,
  collection,
  getDocs,
  orderBy,
} from "@angular/fire/firestore";
import { Observable, map } from "rxjs";

import { Post } from "../post.model";

@Injectable()
export class PostService {
  posts$: Observable<Post[]> = new Observable<Post[]>();
  firestore: Firestore = inject(Firestore);

  // get posts array collection Observable
  getPosts(): Observable<Post[]> {
    const posts = collection(this.firestore, "posts");
    this.posts$ = collectionData(posts) as Observable<Post[]>;
    return this.posts$;
  }
}
