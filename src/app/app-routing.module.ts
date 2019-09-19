import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { PostsModule } from './posts/posts.module';


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'skills',
    component: SkillsComponent
  },
  {
    path: 'blog',
    component: PostsModule
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    data: {
      bodyClass: 'layout-error',
      browserTitle: 'Page not found'
    }
  },
];

@NgModule({
  imports: [CommonModule, PostsModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
