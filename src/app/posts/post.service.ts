import { Injectable } from "@angular/core";
import { AngularFireLiteFirestore } from "angularfire-lite";
import { pipe } from "rxjs";
import { BehaviorSubject, Observable } from "rxjs";
import { map, tap, toArray } from "rxjs/operators";

import { Post } from "./post";

@Injectable()
export class PostService {
  public postsCollection: BehaviorSubject<Post[]> = new BehaviorSubject<Post[]>(
    []
  );
  // postDoc: AngularFirestoreDocument<Post>;
  constructor(public firestore: AngularFireLiteFirestore) {}

  getPosts(): Observable<BehaviorSubject<Post[]>> {
    return this.firestore
      .read("posts")
  }

  // getPosts() {
  //   return this.postsCollection.snapshotChanges().pipe(
  //     map((actions) => {
  //       return actions.map((a) => {
  //         const data = a.payload.doc.data() as Post;
  //         const id = a.payload.doc.id;
  //         return { id, ...data };
  //       });
  //     })
  //   );
  // }

  // getPostData(id: string) {
  //   this.postDoc = this.afs.doc<Post>(`posts/${id}`);
  //   return this.postDoc.valueChanges();
  // }

  getPost(id: string) {
    console.log("post: ", this.firestore.read(`posts[0]`));
    return this.firestore
      .read(`posts[0]`);
  }
}
