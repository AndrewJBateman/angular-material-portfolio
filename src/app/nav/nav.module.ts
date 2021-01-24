import { NgModule } from "@angular/core";
import { TopNavbarComponent } from "./top-navbar/top-navbar.component";
import { SideNavbarComponent } from "./side-navbar/side-navbar.component";

//svg components
import { SvgDarkComponent } from "../components/svg-dark/svg-dark.component";
import { SvgMenuComponent } from "../components/svg-menu/svg-menu.component";
import { SvgHomeComponent } from "../components/svg-home/svg-home.component";
import { SvgWorkComponent } from "../components/svg-work/svg-work.component";
import { SvgProjectComponent } from "../components/svg-project/svg-project.component";
import { SvgMailComponent } from "../components/svg-mail/svg-mail.component";
import { SvgLinkedinComponent } from "../components/svg-linkedin/svg-linkedin.component";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppRoutingModule } from "../app-routing.module";

// Shared/Material modules
import { SharedModule } from "../shared/shared.module";
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
    SvgHomeComponent,
    SvgWorkComponent,
    SvgProjectComponent,
    SvgMailComponent,
    SvgLinkedinComponent,
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
    FlexLayoutModule,
  ],
  exports: [TopNavbarComponent, SideNavbarComponent, SvgDarkComponent],
})
export class NavModule {}
