import { NgModule } from "@angular/core";
import { RouterModule, type Routes } from "@angular/router";
import { WebTechComponent } from "./web-tech.component";

const routes: Routes = [
	{
		path: "",
		component: WebTechComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class WebTechRoutingModule {}
