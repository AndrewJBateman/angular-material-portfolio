import { Route } from "@angular/router";
import { PageNotFoundComponent } from "./pagenotfound.component";

export const NOTFOUND_ROUTES: Route[] = [
	{
		path: "",
		component: PageNotFoundComponent,
	},
];
