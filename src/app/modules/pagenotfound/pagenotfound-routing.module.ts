import { NgModule } from "@angular/core";
import { type Routes, RouterModule } from "@angular/router";

import { PageNotFoundComponent } from "./pagenotfound.component";

const routes: Routes = [
	{
		path: "",
		component: PageNotFoundComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class PageNotFoundRoutingModule {}
