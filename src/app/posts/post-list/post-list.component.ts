import { BehaviorSubject, Observable } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";

import { Post } from "../models/post";
import { PostService } from "../post-services/post.service";
import { StorageService } from "../post-services/storage.service";

@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.scss"],
})
export class PostListComponent implements OnInit {
  title = "Read my posts";
  posts$: Observable<BehaviorSubject<Post[]>>;

  constructor(
    private postService: PostService,
    private storageService: StorageService,
    private titleService: Title,
    private metaTagService: Meta // public auth: AuthService
  ) {}

  // get posts Observable and store if not stored already
  async ngOnInit():Promise<void> {
    this.posts$ = this.postService.getPosts();
    if (this.storageService.get("storedPosts") == null) {
      this.posts$.subscribe(val => {
        this.storageService.set("storedPosts", val);
      });
    }
   
    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag({
      name: "blog",
      content: "andrewbateman.org",
    });
  }
}
