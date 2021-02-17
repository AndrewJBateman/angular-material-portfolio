import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { environment } from "../environments/environment";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";

import { NavModule } from "./nav/nav.module";
import { SharedModule } from "./shared/shared.module";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";

import { ServiceWorkerModule } from "@angular/service-worker";

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: "serverApp" }),
    HttpClientModule,
    NavModule,
    SharedModule,
    MatSidenavModule,
    MatSlideToggleModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production,
    }),
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
