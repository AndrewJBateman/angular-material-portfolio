import { Injectable } from "@angular/core";
import { AngularFireLiteFirestore } from "angularfire-lite";
import { Observable } from "rxjs";
import { shareReplay } from "rxjs/operators";

import { Post } from "../post.model";

@Injectable()
export class PostService {

  constructor(private firestore: AngularFireLiteFirestore) {}

  // get Posts collection Observable using rxjs shareReplay to keep and replay
  //  last emitted observable to avoid unnecessary http requests
  getPosts(): Observable<Post[]> {
    return this.firestore.read("posts").pipe(shareReplay(1));
  }
}
