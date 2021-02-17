import { Injectable } from "@angular/core";
import { AngularFireLiteFirestore } from "angularfire-lite";
import { BehaviorSubject, Observable } from "rxjs";
import { map, tap } from "rxjs/operators";

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
      .pipe(
        tap((posts: BehaviorSubject<Post[]>) => console.log("posts: ", posts))
      );
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

  // getPost(id: string) {
  //   return this.firestore.read(`posts/${id}`);
  // }
}
