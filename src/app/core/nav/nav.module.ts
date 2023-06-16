import { NgModule } from "@angular/core";
import { TopNavbarComponent } from "./top-navbar/top-navbar.component";
import { SideNavbarComponent } from "../nav/side-navbar/side-navbar.component";

//svg components & module
import { SvgDarkComponent } from "../../shared/components/svg-dark/svg-dark.component";
import { SvgMenuComponent } from "../../shared/components/svg-menu/svg-menu.component";
import { SvgGithubComponent } from "../../shared/components/svg-github/svg-github.component";
import { SvgDownloadComponent } from "../../shared/components/svg-download/svg-download.component";
import { SvgCloseComponent } from "../../shared/components/svg-close/svg-close.component";
import { SvgCreateComponent } from "../../shared/components/svg-create/svg-create.component";

import { SvgLinkedinModule } from "../../shared/components/svg-linkedin/svg-linkedin.module";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "../../app-routing.module";

// Shared & Material modules
import { SharedModule } from "../../shared/shared.module";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";

@NgModule({
  declarations: [
    TopNavbarComponent,
    SideNavbarComponent,
    SvgDarkComponent,
    SvgMenuComponent,
    SvgGithubComponent,
    SvgDownloadComponent,
    SvgCloseComponent,
    SvgCreateComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatSlideToggleModule,
    SvgLinkedinModule,
  ],
  exports: [TopNavbarComponent, SideNavbarComponent, SvgDarkComponent],
})
export class NavModule {}
