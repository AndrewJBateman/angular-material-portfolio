import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PostDetailRoutingModule } from "./post-detail-routing.module";
import { PostDetailComponent } from "./post-detail.component";
import { SvgFolderModule } from "../../../shared/components/svg-folder/svg-folder.module";
import { SvgCameraModule } from "../../../shared/components/svg-camera/svg-camera.module";
import { SvgTimerModule } from "../../../shared/components/svg-timer/svg-timer.module";
import { SvgCalenderModule } from "../../../shared/components/svg-calender/svg-calender.module";

import { SharedModule } from "../../../shared/shared.module";
import { PipesModule } from "../../../shared/pipes/pipes.module";
import { StorageService } from "../post-services/storage.service";

@NgModule({
  declarations: [PostDetailComponent],
  imports: [
    CommonModule,
    PostDetailRoutingModule,
    SharedModule,
    PipesModule,
    SvgFolderModule,
    SvgCameraModule,
    SvgTimerModule,
    SvgCalenderModule
  ],
  exports: [PostDetailComponent],
  providers: [StorageService],
})
export class PostDetailModule {}
