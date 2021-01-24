import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { AngularFireAuthModule } from "@angular/fire/auth";

import { environment } from "../environments/environment";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { NavModule } from "./nav/nav.module";
import { SharedModule } from "./shared/shared.module";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";

import { ServiceWorkerModule } from "@angular/service-worker";
import { ProjectDetailModule } from "./projects/project-detail/project-detail.module";

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    AngularFireModule.initializeApp(environment.firebase, "angular-portfolio"), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    BrowserModule.withServerTransition({ appId: "serverApp" }),
    HttpClientModule,
    NavModule,
    SharedModule,
    MatSidenavModule,
    MatSlideToggleModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production,
    }),
    ProjectDetailModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
