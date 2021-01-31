import { NgModule } from "@angular/core";
import { TopNavbarComponent } from "./top-navbar/top-navbar.component";
import { SideNavbarComponent } from "./side-navbar/side-navbar.component";

//svg components
import { SvgDarkComponent } from "../components/svg-dark/svg-dark.component";
import { SvgMenuComponent } from "../components/svg-menu/svg-menu.component";
import { SvgHomeComponent } from "../components/svg-home/svg-home.component";
import { SvgProjectComponent } from "../components/svg-project/svg-project.component";
import { SvgMailComponent } from "../components/svg-mail/svg-mail.component";
import { SvgGithubComponent } from "../components/svg-github/svg-github.component";
import { SvgLinkedinComponent } from "../components/svg-linkedin/svg-linkedin.component";
import { SvgDownloadComponent } from "../components/svg-download/svg-download.component";
import { SvgBlogComponent } from "../components/svg-blog/svg-blog.component";
import { SvgCloseComponent } from "../components/svg-close/svg-close.component";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "../app-routing.module";

// Shared/Material modules
import { SharedModule } from "../shared/shared.module";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";

import { SvgWorkModule } from "../components/svg-work/svg-work.module";

@NgModule({
  declarations: [
    TopNavbarComponent,
    SideNavbarComponent,
    SvgDarkComponent,
    SvgMenuComponent,
    SvgHomeComponent,
    SvgProjectComponent,
    SvgMailComponent,
    SvgGithubComponent,
    SvgLinkedinComponent,
    SvgDownloadComponent,
    SvgBlogComponent,
    SvgCloseComponent,
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
    SvgWorkModule,
  ],
  exports: [TopNavbarComponent, SideNavbarComponent, SvgDarkComponent],
})
export class NavModule {}
