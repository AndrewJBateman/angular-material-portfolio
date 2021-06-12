import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { environment } from "../environments/environment";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./modules/home/home.component";

import { NavModule } from "./core/nav/nav.module";
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
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
