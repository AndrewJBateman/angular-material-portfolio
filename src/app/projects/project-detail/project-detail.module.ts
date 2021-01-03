import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProjectDetailRoutingModule } from "./project-detail-routing.module";
import { ProjectDetailComponent } from "../project-detail/project-detail.component";
import { SharedModule } from "../../shared/shared.module";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [ProjectDetailComponent],
  imports: [
    CommonModule,
    ProjectDetailRoutingModule,
    SharedModule,
    MatButtonModule,
  ],
  exports: [ProjectDetailComponent],
})
export class ProjectDetailModule {}
