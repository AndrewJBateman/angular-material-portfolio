import { BehaviorSubject, Observable } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";

import { Post } from "../post";
import { PostService } from "../post.service";
import { StorageService } from "../storage.service";

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

  ngOnInit():void {
    this.posts$ = this.postService.getPosts();
    this.posts$.subscribe(val => {
      this.storageService.set("storedPosts", val);
    });
   
    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag({
      name: "blog",
      content: "andrewbateman.org",
    });
  }
}
