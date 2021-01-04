import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PostDetailRoutingModule } from "./post-detail-routing.module";
import { PostDetailComponent } from "../post-detail/post-detail.component";
import { SharedModule } from "../../shared/shared.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";

@NgModule({
  declarations: [PostDetailComponent],
  imports: [
    CommonModule,
    PostDetailRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  exports: [MatFormFieldModule, MatInputModule, PostDetailComponent],
})
export class PostDetailModule {}
