import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { environment } from "../environments/environment";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./modules/home/home.component";

import { NavModule } from "./core/nav/nav.module";
import { SharedModule } from "./shared/shared.module";
import { MatDividerModule } from "@angular/material/divider";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatToolbarModule } from "@angular/material/toolbar";

import { ServiceWorkerModule } from "@angular/service-worker";
import { FooterComponent } from "./core/footer/footer.component";

@NgModule({
  declarations: [AppComponent, HomeComponent, FooterComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: "serverApp" }),
    HttpClientModule,
    NavModule,
    SharedModule,
    MatDividerModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatToolbarModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production,
    }),
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
