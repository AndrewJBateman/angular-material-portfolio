import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ProjectsComponent } from "./projects/projects.component";
import { ProjectDetailComponent } from "./projects/project-detail/project-detail.component";
import { SkillsComponent } from "./skills/skills.component";
import { ContactComponent } from "./contact/contact.component";
import { PageNotFoundComponent } from "./pagenotfound/pagenotfound.component";
import { PostsModule } from "./posts/posts.module";

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
    component: ProjectsComponent,
  },
  {
    path: "projects/:projectId",
    component: ProjectDetailComponent,
  },
  {
    path: "skills",
    component: SkillsComponent,
  },
  {
    path: "blog",
    component: PostsModule,
  },
  {
    path: "contact",
    component: ContactComponent,
  },
  {
    path: "**",
    redirectTo: "/404",
    pathMatch: "full",
  },
  {
    path: "404",
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    PostsModule,
    RouterModule.forRoot(appRoutes, {
      initialNavigation: "enabled",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
