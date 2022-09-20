import { Observable } from "rxjs";
import {
  Component,
  HostListener,
  OnInit,
  ChangeDetectionStrategy,
} from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { Router, NavigationExtras } from "@angular/router";

import { Post } from "../post.model";
import { PostService } from "../post-services/post.service";
import { StorageService } from "../post-services/storage.service";

@Component({
  selector: "app-post-list",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./post-list.component.html",
})
export class PostListComponent implements OnInit {
  title = "Blog Posts";
  posts$: Observable<Post[]> = new Observable<Post[]>;

  constructor(
    private postService: PostService,
    private storageService: StorageService,
    private titleService: Title,
    private metaTagService: Meta,
    private router: Router
  ) {}

  @HostListener("document:visibilitychange", ["$event"]) handleVisibilityChange(
    event: any
  ): void {
    this.posts$ = this.postService.getPosts();
  }

  // get posts Observable and store if not stored already
  async ngOnInit(): Promise<void> {
    window.scrollTo(0, 0);
    this.posts$ = this.postService.getPosts();

    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag({
      name: "blog",
      content: "andrewbateman.org",
    });
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
