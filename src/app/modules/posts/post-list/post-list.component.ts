import {
	Component,
	type OnInit,
	ChangeDetectionStrategy,
	inject,
	type AfterViewInit,
} from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { Router, type NavigationExtras } from "@angular/router";

import { type Post } from "../post.model";
import { type Observable } from "rxjs";
import { BreakpointService } from "../../../core/services/breakpoint.service";
import { FirestoreDataService } from "../../../core/services/firestore-data.service";
import { type MatTabChangeEvent, MatTabsModule } from "@angular/material/tabs";
import { ReadTimePipe } from "../../../shared/pipes/read-time.pipe";
import { DateConvertPipe } from "../../../shared/pipes/date-convert.pipe";
import { SvgTimerComponent } from "../../../shared/components/svg-timer/svg-timer.component";
import { SvgCalenderComponent } from "../../../shared/components/svg-calender/svg-calender.component";
import { MatCardModule } from "@angular/material/card";
import { AsyncPipe, SlicePipe } from "@angular/common";

@Component({
    selector: "app-post-list",
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: "./post-list.component.html",
    styleUrls: ["./post-list.component.scss"],
    imports: [
        MatTabsModule,
        MatCardModule,
        SvgCalenderComponent,
        SvgTimerComponent,
        DateConvertPipe,
        ReadTimePipe,
        AsyncPipe,
        SlicePipe,
    ]
})
export class PostListComponent implements OnInit, AfterViewInit {
	firestoreDataService = inject(FirestoreDataService);
	titleService = inject(Title);
	metaTagService = inject(Meta);
	breakpointService = inject(BreakpointService);
	router = inject(Router);

	title = "Technical Posts";
	tabs = ["Dev", "IT", "Eng", "Env"];
	tabIndex = 0;
	posts$: Observable<Post[]>;
	BreakpointColumnNr$ = this.breakpointService.breakpointColumnNr$;

	ngOnInit(): void {
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
		const tabLabel = localStorage.getItem("tab") || "";
		if (tabLabel) {
			this.tabIndex = this.getKeyFromValue(tabLabel);
		}
	}

	getKeyFromValue = (value: string): number => {
		const arrayKey = Object.keys(this.tabs).find(
			key => this.tabs[+key] === value
		);
		return arrayKey ? +arrayKey : 0;
	};

	trackPostById(index: number, post: Post): number {
		return post?.id;
	}

	// store current tab in local storage
	tabSelected(tabChangeEvent: MatTabChangeEvent): void {
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
