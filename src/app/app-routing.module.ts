import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";

const appRoutes: Routes = [
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
      import("./projects/projects.module").then((mod) => mod.ProjectsModule),
  },
  {
    path: "projects/:projectId",
    loadChildren: () =>
      import("./projects/project-detail/project-detail.module").then(
        (mod) => mod.ProjectDetailModule
      ),
  },
  {
    path: "skills",
    loadChildren: () =>
      import("./skills/skills.module").then((mod) => mod.SkillsModule),
  },
  {
    path: "blog",
    loadChildren: () =>
      import("./posts/posts.module").then((mod) => mod.PostsModule),
      
  },
  {
    path: "blog/:id",
    loadChildren: () =>
      import("./posts/post-detail/post-detail.module").then((mod) => mod.PostDetailModule),
  },
  {
    path: "contact",
    loadChildren: () =>
      import("./contact/contact.module").then((mod) => mod.ContactModule),
  },
  {
    path: "**",
    loadChildren: () =>
      import("./pagenotfound/pagenotfound.module").then(
        (mod) => mod.PageNotFoundModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      // initialNavigation: "enabledBlocking",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
