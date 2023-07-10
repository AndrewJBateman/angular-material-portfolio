import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { PageNotFoundRoutingModule } from "./pagenotfound-routing.module";
import { PageNotFoundComponent } from "./pagenotfound.component";

import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";

@NgModule({
	declarations: [PageNotFoundComponent],
	imports: [
		CommonModule,
		PageNotFoundRoutingModule,
		MatButtonModule,
		MatCardModule,
	],
	exports: [PageNotFoundComponent, RouterModule],
})
export default class PageNotFoundModule {}
