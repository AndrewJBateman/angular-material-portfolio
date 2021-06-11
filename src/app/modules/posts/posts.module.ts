import { NgModule } from "@angular/core";
import { AngularFireLite } from "angularfire-lite";
import { Routes, RouterModule } from "@angular/router";

import { SharedModule } from "../../shared/shared.module";
import { PipesModule } from "../../shared/pipes/pipes.module";

import { PostListComponent } from "./post-list/post-list.component";
import { SvgCalenderModule } from "../../shared/components/svg-calender/svg-calender.module";
import { SvgFolderModule } from "../../shared/components/svg-folder/svg-folder.module";
import { SvgTimerModule } from "../../shared/components/svg-timer/svg-timer.module";
import { PostService } from "./post-services/post.service";
import { StorageService } from "./post-services/storage.service";
import { environment } from "../../../environments/environment";

const routes: Routes = [
  {
    path: "",
    component: PostListComponent,
  }
];
@NgModule({
  imports: [
    SharedModule,
    PipesModule,
    RouterModule.forChild(routes),
    AngularFireLite.forRoot(environment.config),
    SvgFolderModule,
    SvgTimerModule,
    SvgCalenderModule
  ],
  declarations: [PostListComponent],
  providers: [PostService, StorageService],
})
export class PostsModule {}
