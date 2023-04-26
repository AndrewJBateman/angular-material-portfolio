import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
} from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { Router, NavigationExtras } from "@angular/router";

import { Post } from "../post.model";
import { PostService } from "../post-services/post.service";

@Component({
  selector: "app-post-list",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./post-list.component.html",
})
export class PostListComponent implements OnInit {
  title = "Blog Posts";
  posts: Post[] = [];

  constructor(
    private postService: PostService,
    private titleService: Title,
    private metaTagService: Meta,
    private router: Router
  ) {}

  ngOnInit() {
    window.scrollTo(0, 0);
    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag({
      name: "blog",
      content: "andrewbateman.org",
    });
    this.getData();
  }

  async getData(): Promise<void> {
    this.posts = await this.postService.getPosts();
  }

  onGoToPostDetail(post: Post): void {
    const navigationExtras: NavigationExtras = {
      state: {
        post,
      },
    };
    this.router.navigate(["blog/detail"], navigationExtras);
  }
}
