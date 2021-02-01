import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { SharedModule } from "./../shared/shared.module";

import { PostListComponent } from "./post-list/post-list.component";
import { SvgCalenderComponent } from "../components/svg-calender/svg-calender.component";
import { SvgFolderComponent } from "../components/svg-folder/svg-folder.component";
import { SvgTimerComponent } from "../components/svg-timer/svg-timer.component";
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
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [
    PostListComponent,
    SvgCalenderComponent,
    SvgFolderComponent,
    SvgTimerComponent,
  ],
  providers: [PostService],
})
export class PostsModule {}
