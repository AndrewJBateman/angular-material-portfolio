import { Injectable } from "@angular/core";
import { AngularFireLiteFirestore } from "angularfire-lite";
import { BehaviorSubject, Observable } from "rxjs";
import { share } from "rxjs/operators";

import { Post } from "../post.model";

@Injectable()
export class PostService {
  private postsCollection: Observable<BehaviorSubject<Post[]>>;

  constructor(private firestore: AngularFireLiteFirestore) {}

  // get Posts collection Observable if it does not already exist and use rxjs share()
  // so the same Observable is shared the next time to avoid unnecessary http requests
  getPosts(): Observable<BehaviorSubject<Post[]>> {
    if (this.postsCollection) {
      return this.postsCollection;
    } else {
      this.postsCollection = this.firestore
        .read("posts").pipe(share());
      return this.postsCollection;
    }
  }
}
