import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./modules/home/home.component";

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
      import("./modules/projects/projects.module").then((mod) => mod.ProjectsModule),
  },
  {
    path: "skills",
    loadChildren: () =>
      import("./modules/skills/skills.module").then((mod) => mod.SkillsModule),
  },
  {
    path: "blog",
    loadChildren: () =>
      import("./modules/posts/posts.module").then((mod) => mod.PostsModule),

  },
  {
    path: "contact",
    loadChildren: () =>
      import("./modules/contact/contact.module").then((mod) => mod.ContactModule),
  },
  {
    path: "**",
    loadChildren: () =>
      import("./modules/pagenotfound/pagenotfound.module").then(
        (mod) => mod.PageNotFoundModule
      ),
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
