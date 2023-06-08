import { Component, OnInit, ChangeDetectionStrategy, inject } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { Router, NavigationExtras } from "@angular/router";

import { Post } from "../post.model";
import { PostService } from "../post-services/post.service";
import { Observable } from "rxjs";
import { BreakpointService } from "../../../core/breakpoint.service";

@Component({
  selector: "app-post-list",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.scss"]
})
export class PostListComponent implements OnInit {
  title = "Blog Posts";
  posts$: Observable<Post[]>;
  breakpointService = inject(BreakpointService);
  columns$ = this.breakpointService.columns$;

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
    this.posts$ = this.postService.getPosts();
  }

  // trackByFn(index: number, post: Post): number {
  //   return post.id;
  // }

  onGoToPostDetail(post: Post): void {
    const navigationExtras: NavigationExtras = {
      state: {
        post,
      },
    };
    this.router.navigate(["blog/detail"], navigationExtras);
  }
}
