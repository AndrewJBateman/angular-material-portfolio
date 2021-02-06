import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { SharedModule } from "./../shared/shared.module";
import { PipesModule } from "./../pipes/pipes.module";

import { PostListComponent } from "./post-list/post-list.component";
import { SvgCalenderComponent } from "../components/svg-calender/svg-calender.component";
import { SvgFolderModule } from "../components/svg-folder/svg-folder.module";
import { SvgTimerModule } from "../components/svg-timer/svg-timer.module";
import { PostService } from "../services/post.service";
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
  {
    path: "dashboard",
    loadChildren: () =>
      import("./post-dashboard/post-dashboard.module").then(
        (mod) => mod.PostDashboardModule
      ),
  },
];
@NgModule({
  imports: [
    SharedModule,
    PipesModule,
    RouterModule.forChild(routes),
    SvgFolderModule,
    SvgTimerModule,
  ],
  declarations: [PostListComponent, SvgCalenderComponent],
  providers: [PostService],
})
export class PostsModule {}
