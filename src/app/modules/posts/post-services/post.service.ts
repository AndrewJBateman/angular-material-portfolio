import { Injectable } from "@angular/core";
import { initializeApp } from "firebase/app";
import { orderBy } from "firebase/firestore/lite";

import {
  getFirestore,
  collection,
  getDocs,
  query,
} from "firebase/firestore/lite";

import { environment } from "../../../../environments/environment";
import { Post } from "../post.model";

@Injectable()
export class PostService {
  // init array
  postArray: Post[] = [];

  // get Posts from firebase storage using firebase firestore lite
  async getPosts(): Promise<Post[]> {
    const app = initializeApp(environment.firebase);
    const firestore = getFirestore(app);

    const postQuery = query(
      collection(firestore, "posts"),
      orderBy("published", "desc")
    );

    const docsSnapshot = await getDocs(postQuery);

    docsSnapshot.forEach((doc) => {
      this.postArray.push({
        ...(doc.data() as Post),
      });
    });
    return this.postArray;
  }
}
