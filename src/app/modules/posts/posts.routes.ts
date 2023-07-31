import { Route } from "@angular/router";
// import { PostDetailComponent } from "./post-list/post-detail/post-detail.component";
import { PostListComponent } from "./post-list/post-list.component";
import { importProvidersFrom } from "@angular/core";
import { NgxPictureModule, CLOUDINARY_CONFIG } from "ngx-picture";

export const POSTS_ROUTES: Route[] = [
	{
		path: "",
		component: PostListComponent,
	},
	{
		path: "detail",
    // component: PostDetailComponent,
		loadComponent: () =>
			import("./post-list/post-detail/post-detail.component").then(
				mod => mod.PostDetailComponent
			),
		providers: [
			importProvidersFrom(NgxPictureModule.forRoot(CLOUDINARY_CONFIG)),
		],
	},
];
