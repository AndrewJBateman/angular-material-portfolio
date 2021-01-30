import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProjectsComponent } from "./projects.component";
import { SvgCodeComponent } from "../components/svg-code/svg-code.component";
import { SvgOpenComponent } from "../components/svg-open/svg-open.component";

import { ProjectsRoutingModule } from "./projects-routing.module";
import { SharedModule } from "../shared/shared.module";
import { MatButtonModule } from "@angular/material/button";
import { SvgMoreModule } from "../components/svg-more/svg-more.module";

@NgModule({
  declarations: [ProjectsComponent, SvgCodeComponent, SvgOpenComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    SharedModule,
    MatButtonModule,
    SvgMoreModule,
  ],
  exports: [ProjectsComponent, SvgCodeComponent, SvgOpenComponent],
})
export class ProjectsModule {}
