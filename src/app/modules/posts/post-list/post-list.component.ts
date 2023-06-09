import { Component, OnInit, ChangeDetectionStrategy, inject } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { Router, NavigationExtras } from "@angular/router";

import { Post } from "../post.model";
import { Observable } from "rxjs";
import { BreakpointService } from "../../../core/services/breakpoint.service";
import { FirestoreDataService } from "src/app/core/services/firestore-data.service";

@Component({
  selector: "app-post-list",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.scss"]
})
export class PostListComponent implements OnInit {
  firestoreDataService = inject(FirestoreDataService);
  titleService = inject(Title);
  metaTagService = inject(Meta);
  breakpointService = inject(BreakpointService);
  router = inject(Router);

  title = "Blog Posts";
  posts$: Observable<Post[]>;
  columns$ = this.breakpointService.columns$;

  ngOnInit() {
    window.scrollTo(0, 0);
    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag({
      name: "blog",
      content: "andrewbateman.org",
    });
    this.posts$ = this.firestoreDataService.getData("posts");
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
