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
import { SvgLinkedinComponent } from "../../../shared/components/svg-linkedin/svg-linkedin.component";
import { SvgGithubComponent } from "../../../shared/components/svg-github/svg-github.component";

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
		SvgGithubComponent,
		SvgLinkedinComponent,
		SvgCloseComponent,
	],
})
export class SideNavbarComponent {
	@Output() sidenavClosed = new EventEmitter();

	onSidenavClose() {
		this.sidenavClosed.emit();
	}
}
