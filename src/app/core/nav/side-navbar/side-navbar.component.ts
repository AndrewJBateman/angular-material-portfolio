/**
 * Side navigation bar component.
 *
 * Displays a responsive side nav with router links, SVG icons,
 * and emits an event when closed.
 *
 * Imports Angular modules for UI components, and custom SVG icon components.
 *
 * Selector: 'app-side-navbar'
 *
 * Exports the SideNavbarComponent class.
 */
import {
	Component,
	Output,
	EventEmitter,
	ChangeDetectionStrategy,
} from "@angular/core";

import { NgClass } from "@angular/common";
import { RouterLinkActive, RouterLink } from "@angular/router";
import { MatDividerModule } from "@angular/material/divider";
import { MatListModule } from "@angular/material/list";

import { SvgCloseComponent } from "../../../shared/components/svg-close/svg-close.component";
import { SvgLinkedinModule } from "../../../shared/components/svg-linkedin/svg-linkedin.module";
import { SvgGithubModule } from "src/app/shared/components/svg-github/svg-github.module";

@Component({
	selector: "app-side-navbar",
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: "./side-navbar.component.html",
	styleUrls: ["./side-navbar.component.scss"],
	standalone: true,
	imports: [
		MatListModule,
		MatDividerModule,
		RouterLinkActive,
		RouterLink,
		NgClass,
		SvgLinkedinModule,
		SvgCloseComponent,
    SvgGithubModule
	],
})
export class SideNavbarComponent {
	@Output() sidenavClosed = new EventEmitter();

	onSidenavClose() {
		this.sidenavClosed.emit();
	}
}
