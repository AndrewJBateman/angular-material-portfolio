import { Route } from "@angular/router";
import { PostDetailComponent } from "./post-list/post-detail/post-detail.component";
import { PostListComponent } from "./post-list/post-list.component";

export const POSTS_ROUTES: Route[] = [
	{
		path: "",
		component: PostListComponent,
	},
	{
		path: "detail",
		component: PostDetailComponent,
	},
];
