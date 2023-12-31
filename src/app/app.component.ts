/**
 * The main application component.
 *
 * Initializes Angular metadata like change detection strategy, template, and styles.
 * Imports and declares child components.
 * Implements logic for theme switching between light and dark modes.
 * Handles SEO metadata in ngOnInit.
 */
import {
	Component,
	HostBinding,
	OnInit,
	ChangeDetectionStrategy,
} from "@angular/core";
import { NgClass } from "@angular/common";
import { Meta } from "@angular/platform-browser";
import { FooterComponent } from "./core/footer/footer.component";
import { RouterOutlet } from "@angular/router";
import { RouterLinkActive, RouterLink } from "@angular/router";
import { MatDividerModule } from "@angular/material/divider";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { TopNavbarComponent } from "./core/nav/top-navbar/top-navbar.component";

import { SvgCloseComponent } from "./shared/components/svg-close/svg-close.component";
import { SvgLinkedinModule } from "./shared/components/svg-linkedin/svg-linkedin.module";
import { SvgGithubModule } from "./shared/components/svg-github/svg-github.module";

@Component({
	selector: "app-root",
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
	standalone: true,
	imports: [
    MatListModule,
    MatDividerModule,
		RouterLinkActive,
		RouterLink,
		TopNavbarComponent,
    NgClass,
		MatSidenavModule,
		RouterOutlet,
		FooterComponent,
		SvgLinkedinModule,
		SvgCloseComponent,
		SvgGithubModule,
	],
})
export class AppComponent implements OnInit {
	private isDark = false;

	@HostBinding("class")
	get themeMode(): string | boolean {
		return this.isDark ? "dark-theme" : "light-theme";
	}

	constructor(private readonly metaTagService: Meta) {}

	ngOnInit(): void {
		this.metaTagService.addTags([
			{
				name: "keywords",
				content: "Angular SEO Integration, posts, contact, projects, portfolio",
			},
			{ name: "robots", content: "index" },
			{ name: "author", content: "Andrew Bateman" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ name: "date", content: "2020-06-08", scheme: "YYYY-MM-DD" },
			{ charset: "UTF-8" },
		]);
	}

	switchMode(isDarkMode: boolean): void {
		this.isDark = isDarkMode;
	}
}
