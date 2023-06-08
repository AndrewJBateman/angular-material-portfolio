import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProjectsComponent } from "./projects.component";

import { ProjectsRoutingModule } from "./projects-routing.module";
import { SharedModule } from "../../shared/shared.module";
import { MatButtonModule } from "@angular/material/button";
import { ProjectService } from "./project-services/project.service";

@NgModule({
  declarations: [ProjectsComponent],
  imports: [CommonModule, ProjectsRoutingModule, SharedModule, MatButtonModule],
  exports: [ProjectsComponent],
  providers: [ProjectService],
})
export default class ProjectsModule {}
