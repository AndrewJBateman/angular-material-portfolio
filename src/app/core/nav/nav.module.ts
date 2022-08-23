import { NgModule } from "@angular/core";
import { TopNavbarComponent } from "./top-navbar/top-navbar.component";
import { SideNavbarComponent } from "../nav/side-navbar/side-navbar.component";

//svg components & module
import { SvgDarkComponent } from "../../shared/components/svg-dark/svg-dark.component";
import { SvgMenuComponent } from "../../shared/components/svg-menu/svg-menu.component";
import { SvgHomeComponent } from "../../shared/components/svg-home/svg-home.component";
import { SvgProjectComponent } from "../../shared/components/svg-project/svg-project.component";
import { SvgGithubComponent } from "../../shared/components/svg-github/svg-github.component";
import { SvgDownloadComponent } from "../../shared/components/svg-download/svg-download.component";
import { SvgBlogComponent } from "../../shared/components/svg-blog/svg-blog.component";
import { SvgCloseComponent } from "../../shared/components/svg-close/svg-close.component";
import { SvgCreateComponent } from "../../shared/components/svg-create/svg-create.component";

import { SvgLinkedinModule} from "../../shared/components/svg-linkedin/svg-linkedin.module";
import { SvgMailModule } from "../../shared/components/svg-mail/svg-mail.module";
import { SvgWorkModule } from "../../shared/components/svg-work/svg-work.module";

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
    SvgHomeComponent,
    SvgProjectComponent,
    SvgGithubComponent,
    SvgDownloadComponent,
    SvgBlogComponent,
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
    SvgMailModule,
    SvgWorkModule,
  ],
  exports: [TopNavbarComponent, SideNavbarComponent, SvgDarkComponent],
})
export class NavModule {}
