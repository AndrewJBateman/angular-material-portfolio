import { ProjectCardComponent } from "./project-card/project-card.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProjectsComponent } from "./projects.component";

import { ProjectsRoutingModule } from "./projects-routing.module";
import { SharedModule } from "../../shared/shared.module";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [ProjectsComponent, ProjectCardComponent],
  imports: [CommonModule, ProjectsRoutingModule, SharedModule, MatButtonModule],
  exports: [ProjectsComponent, ProjectCardComponent],
})
export class ProjectsModule {}
