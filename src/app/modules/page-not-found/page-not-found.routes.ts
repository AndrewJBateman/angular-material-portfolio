import { Route } from "@angular/router";
import { PageNotFoundComponent } from "./page-not-found.component";

export const NOTFOUND_ROUTES: Route[] = [
	{
		path: "",
		component: PageNotFoundComponent,
	},
];
