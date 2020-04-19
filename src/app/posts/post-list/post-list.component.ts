import { Observable } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";

import { Post } from "../post";
import { PostService } from "./../../services/post.service";

@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.scss"],
})
export class PostListComponent implements OnInit {
  title = "Read my posts";

  posts: Observable<Post[]>;

  constructor(
    private postService: PostService,
    private titleService: Title,
    private metaTagService: Meta // public auth: AuthService
  ) {}

  ngOnInit() {
    this.posts = this.postService.getPosts();
    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag({
      name: "blog",
      content: "andrewbateman.org",
    });
  }
}
