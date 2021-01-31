import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProjectsComponent } from "./projects.component";

import { ProjectsRoutingModule } from "./projects-routing.module";
import { SharedModule } from "../shared/shared.module";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [ProjectsComponent],
  imports: [CommonModule, ProjectsRoutingModule, SharedModule, MatButtonModule],
  exports: [ProjectsComponent],
})
export class ProjectsModule {}
