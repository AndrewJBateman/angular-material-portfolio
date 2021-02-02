import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PostDetailRoutingModule } from "./post-detail-routing.module";
import { PostDetailComponent } from "../post-detail/post-detail.component";
import { SvgFolderModule } from "../../components/svg-folder/svg-folder.module";
import { SvgCameraModule } from "../../components/svg-camera/svg-camera.module";
import { SvgTimerModule } from "../../components/svg-timer/svg-timer.module";

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
    SvgFolderModule,
    SvgCameraModule,
    SvgTimerModule,
  ],
  exports: [MatFormFieldModule, MatInputModule, PostDetailComponent],
})
export class PostDetailModule {}
