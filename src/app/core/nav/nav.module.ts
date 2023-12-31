import { NgModule } from "@angular/core";
import { TopNavbarComponent } from "./top-navbar/top-navbar.component";

import { SvgDarkComponent } from "../../shared/components/svg-dark/svg-dark.component";
import { SvgMenuComponent } from "../../shared/components/svg-menu/svg-menu.component";
import { SvgDownloadComponent } from "../../shared/components/svg-download/svg-download.component";
import { SvgCloseComponent } from "../../shared/components/svg-close/svg-close.component";
import { SvgCreateComponent } from "../../shared/components/svg-create/svg-create.component";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { routes } from "../../app.routes";

import { SharedModule } from "../../shared/shared.module";
import { SvgGithubModule } from "src/app/shared/components/svg-github/svg-github.module";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { provideRouter, withComponentInputBinding } from "@angular/router";
import { SvgLinkedinModule } from "src/app/shared/components/svg-linkedin/svg-linkedin.module";

@NgModule({
	imports: [
    SvgGithubModule,
    SvgLinkedinModule,
		BrowserAnimationsModule,
		SharedModule,
		MatListModule,
		MatToolbarModule,
		MatSidenavModule,
		MatButtonModule,
		MatSlideToggleModule,
		TopNavbarComponent,
		SvgDarkComponent,
		SvgMenuComponent,
		SvgDownloadComponent,
		SvgCloseComponent,
		SvgCreateComponent,
	],
	exports: [TopNavbarComponent, SvgDarkComponent],
	providers: [provideRouter(routes, withComponentInputBinding())],
})
export class NavModule {}

