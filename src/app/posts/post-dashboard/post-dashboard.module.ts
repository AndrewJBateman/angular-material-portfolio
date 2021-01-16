import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PostDashboardRoutingModule } from "./post-dashboard-routing.module";
import { PostDashboardComponent } from "../post-dashboard/post-dashboard.component";
import { SharedModule } from "../../shared/shared.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatListModule } from "@angular/material/list";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatInputModule } from "@angular/material/input";

@NgModule({
  declarations: [PostDashboardComponent],
  imports: [
    CommonModule,
    PostDashboardRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatProgressBarModule,
  ],
  exports: [PostDashboardComponent],
})
export class PostDashboardModule {}
