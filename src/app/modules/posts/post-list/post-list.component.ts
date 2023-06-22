import { PostDetailComponent } from './post-detail/post-detail.component';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  inject,
  AfterViewInit,
} from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { Router, NavigationExtras } from "@angular/router";

import { Post } from "../post.model";
import { Observable } from "rxjs";
import { BreakpointService } from "../../../core/services/breakpoint.service";
import { FirestoreDataService } from "src/app/core/services/firestore-data.service";
import { MatTabChangeEvent } from "@angular/material/tabs";

@Component({
  selector: "app-post-list",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.scss"],
})
export class PostListComponent implements OnInit, AfterViewInit {
  firestoreDataService = inject(FirestoreDataService);
  titleService = inject(Title);
  metaTagService = inject(Meta);
  breakpointService = inject(BreakpointService);
  router = inject(Router);

  title = "Technical Posts";
  tabs = ["Dev", "IT", "Eng", "Env"];
  tabIndex: number = 0;
  posts$: Observable<Post[]>;
  columns$ = this.breakpointService.columns$;

  ngOnInit() {
    window.scrollTo(0, 0);
    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag({
      name: "posts",
      content: "andrewbateman.org",
    });
    this.posts$ = this.firestoreDataService.getData("posts");
  }

  // When user returns to tab grid from viewing a post in PostDetailComponent
  // the previous tab label string will be retrieved from local storage
  // Tab label converted to numeric tab key from tabs array
  ngAfterViewInit(): void {
    const tabIndexLabel = localStorage.getItem("tab") || "";
    this.tabIndex = this.getKeyFromValue(tabIndexLabel);
  }

  getKeyFromValue = (value: string): number => {
    const arrayKey = Object.keys(this.tabs).find(
      (key) => this.tabs[+key] === value
    );
    return arrayKey ? +arrayKey : 0;
  };

  cardTrackByFn(index: number, post: Post): number {
    return post.id;
  }

  // store current tab in local storage
  tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    const currentTabLabel = tabChangeEvent.tab.textLabel;
    localStorage.setItem("tab", currentTabLabel);
  }

  onGoToPostDetail(post: Post): void {
    const navigationExtras: NavigationExtras = {
      state: {
        post,
      },
    };
    this.router.navigate(["posts/detail"], navigationExtras);
  }
}
