import { Injectable } from "@angular/core";
import { AngularFireLiteFirestore } from "angularfire-lite";
import { BehaviorSubject, Observable } from "rxjs";

import { Post } from "./post";

@Injectable()
export class PostService {
  public postsCollection: BehaviorSubject<Post[]> = new BehaviorSubject<Post[]>(
    []
  );
  constructor(public firestore: AngularFireLiteFirestore) {}

  getPosts(): Observable<BehaviorSubject<Post[]>> {
    console.log("post service running");
    return this.firestore
      .read("posts")
  }
}
