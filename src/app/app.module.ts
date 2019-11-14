import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NavModule } from './nav/nav.module';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { PipesModule } from './pipes/pipes.module';
import { PostsModule } from './posts/posts.module';
import { ProjectsComponent } from './projects/projects.component';
import { SharedModule } from './shared/shared.module';
import { SkillsComponent } from './skills/skills.component';

@NgModule({
	declarations: [
		AppComponent,
		ContactComponent,
		HomeComponent,
		PageNotFoundComponent,
		ProjectsComponent,
    SkillsComponent
	],
	imports: [
		AngularFireModule.initializeApp(environment.firebase, 'angular-blog'), // imports firebase/app needed for everything
		AngularFirestoreModule, // imports firebase/firestore, only needed for database features
		AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
		AngularFireStorageModule, // imports firebase/storage only needed for storage features
		HttpClientModule,
    NavModule,
    PipesModule,
		PostsModule,
    SharedModule.forRoot()
  ],
  exports: [],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
