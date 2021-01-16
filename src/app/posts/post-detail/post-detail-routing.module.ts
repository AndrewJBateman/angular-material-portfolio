import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PostDetailComponent } from "../post-detail/post-detail.component";

const routes: Routes = [
  {
    path: "",
    component: PostDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostDetailRoutingModule {}
