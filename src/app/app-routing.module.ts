import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./modules/home/home.component";
import { PostDetailComponent } from "./modules/posts/post-list/post-detail/post-detail.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full",
  },
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "projects",
    loadChildren: () =>
      import("./modules/projects/projects.module"),
  },
  {
    path: "skills",
    loadChildren: () =>
      import("./modules/skills/skills.module"),
  },
  {
    path: "blog",
    loadChildren: () =>
      import("./modules/posts/posts.module"),

  },
  {
    path: "blog/detail",
    component: PostDetailComponent
  },
  {
    path: "contact",
    loadChildren: () =>
      import("./modules/contact/contact.module"),
  },
  {
    path: "web-tech",
    loadChildren: () =>
      import("./modules/web-tech/web-tech.module"),
  },
  {
    path: "**",
    loadChildren: () =>
      import("./modules/pagenotfound/pagenotfound.module"),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // initialNavigation: "enabledBlocking",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
