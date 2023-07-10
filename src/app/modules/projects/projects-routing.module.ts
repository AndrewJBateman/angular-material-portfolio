import { NgModule } from "@angular/core";
import { type Routes, RouterModule } from "@angular/router";

import { ProjectsComponent } from "./projects.component";

const routes: Routes = [
	{
		path: "",
		component: ProjectsComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ProjectsRoutingModule {}
