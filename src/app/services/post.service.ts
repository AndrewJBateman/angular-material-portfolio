import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

import { Post } from '../posts/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  postsCollection: AngularFirestoreCollection<Post>;

  constructor(private afs: AngularFirestore) {
    this.postsCollection = this.afs.collection('posts', ref =>
      ref.orderBy('published', 'desc'));
  }

  getPosts() {
    return this.postsCollection
      .snapshotChanges()
      .pipe(
        map(
          actions => {
            return actions.map(a => {
              const data = a.payload.doc.data() as Post;
              const id = a.payload.doc.id;
              return { id, ...data };
            });
          }
        )
      );
  }

}
