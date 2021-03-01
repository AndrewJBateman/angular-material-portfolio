import { NgModule } from "@angular/core";
import { AngularFireLite } from "angularfire-lite";
import { Routes, RouterModule } from "@angular/router";

import { SharedModule } from "./../shared/shared.module";
import { PipesModule } from "./../pipes/pipes.module";

import { PostListComponent } from "./post-list/post-list.component";
import { SvgCalenderComponent } from "../components/svg-calender/svg-calender.component";
import { SvgFolderModule } from "../components/svg-folder/svg-folder.module";
import { SvgTimerModule } from "../components/svg-timer/svg-timer.module";
import { PostService } from "./post.service";
import { StorageService } from "./storage.service";
import { environment } from "src/environments/environment";

const routes: Routes = [
  {
    path: "",
    component: PostListComponent,
  },
  {
    path: ":id",
    loadChildren: () =>
      import("./post-detail/post-detail.module").then(
        (mod) => mod.PostDetailModule
      ),
  },
];
@NgModule({
  imports: [
    SharedModule,
    PipesModule,
    RouterModule.forChild(routes),
    AngularFireLite.forRoot(environment.config),
    SvgFolderModule,
    SvgTimerModule,
  ],
  declarations: [PostListComponent, SvgCalenderComponent],
  providers: [PostService, StorageService],
})
export class PostsModule {}
