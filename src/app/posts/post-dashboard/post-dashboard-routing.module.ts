import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PostDashboardComponent } from "./post-dashboard.component";

const routes: Routes = [
  {
    path: "",
    component: PostDashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostDashboardRoutingModule {}
