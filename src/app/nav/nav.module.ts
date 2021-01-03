import { NgModule } from "@angular/core";
import { TopNavbarComponent } from "./top-navbar/top-navbar.component";
import { SideNavbarComponent } from "./side-navbar/side-navbar.component";
import { SharedModule } from "../shared/shared.module";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { AppRoutingModule } from "../app-routing.module";
@NgModule({
  declarations: [TopNavbarComponent, SideNavbarComponent],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    FlexLayoutModule,
  ],
  exports: [TopNavbarComponent, SideNavbarComponent],
})
export class NavModule {}
