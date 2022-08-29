import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { SharedModule } from "../../shared/shared.module";
import { PipesModule } from "../../shared/pipes/pipes.module";

import { PostListComponent } from "./post-list/post-list.component";
import { PostDetailComponent } from "./post-list/post-detail/post-detail.component";
import { SvgCalenderModule } from "../../shared/components/svg-calender/svg-calender.module";
import { SvgFolderModule } from "../../shared/components/svg-folder/svg-folder.module";
import { SvgTimerModule } from "../../shared/components/svg-timer/svg-timer.module";
import { SvgCameraModule } from "../../shared/components/svg-camera/svg-camera.module";
import { SvgBackModule } from "../../shared/components/svg-back/svg-back.module";
import { PostService } from "./post-services/post.service";
import { ImageService } from "./post-services/image.service";
import { StorageService } from "./post-services/storage.service";
import { environment } from "../../../environments/environment";

const routes: Routes = [
  {
    path: "",
    component: PostListComponent,
  },
  {
    path: "detail",
    component: PostDetailComponent
  }
];
@NgModule({
  imports: [
    SharedModule,
    PipesModule,
    RouterModule.forChild(routes),
    SvgFolderModule,
    SvgTimerModule,
    SvgCalenderModule,
    SvgCameraModule,
    SvgBackModule
  ],
  declarations: [PostListComponent, PostDetailComponent],
  providers: [PostService, StorageService, ImageService],
})
export class PostsModule {}
