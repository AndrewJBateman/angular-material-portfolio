/**
 * Top navigation bar component.
 *
 * Declares Angular component with selector 'app-top-navbar'.
 *
 * Imports Angular modules and components needed.
 *
 * Exports component class TopNavbarComponent implementing OnInit.
 *
 * Contains properties to inject BreakpointService and DarkModeService.
 *
 * Handles toggling dark mode on/off and emitting event.
 *
 * Handles side navigation open/close and emitting event.
 *
 * Initializes by setting up dark mode from service.
 */
import {
	Component,
	Output,
	EventEmitter,
	inject,
	type OnInit,
} from "@angular/core";
import {
	type MatSlideToggleChange,
	MatSlideToggleModule,
} from "@angular/material/slide-toggle";

import { BreakpointService } from "../../services/breakpoint.service";
import { DarkModeService } from "../../services/dark-mode.service";
import { SvgDarkComponent } from "../../../shared/components/svg-dark/svg-dark.component";
import { RouterLinkActive, RouterLink } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";
import { SvgMenuComponent } from "../../../shared/components/svg-menu/svg-menu.component";
import { AsyncPipe } from "@angular/common";
import { MatToolbarModule } from "@angular/material/toolbar";
import { SvgGithubModule } from "src/app/shared/components/svg-github/svg-github.module";
import { SvgLinkedinModule } from "src/app/shared/components/svg-linkedin/svg-linkedin.module";

@Component({
	selector: "app-top-navbar",
	templateUrl: "./top-navbar.component.html",
	styleUrls: ["./top-navbar.component.scss"],
	standalone: true,
	imports: [
		MatToolbarModule,
		SvgMenuComponent,
		SvgGithubModule,
		SvgLinkedinModule,
		MatButtonModule,
		RouterLinkActive,
		RouterLink,
		MatSlideToggleModule,
		SvgDarkComponent,
		AsyncPipe,
	],
})
export class TopNavbarComponent implements OnInit {
	breakpointService = inject(BreakpointService);
	darkModeService = inject(DarkModeService);

	isDarkMode = false;

	@Output() readonly darkModeSwitched = new EventEmitter<boolean>();
	@Output() public sidenavToggle: EventEmitter<boolean> = new EventEmitter<boolean>();

	ngOnInit(): void {
		this.darkModeService.initDarkMode();
	}

	toggleSidenav = (): void => {
		this.sidenavToggle.emit();
	};

	// user can toggle dark mode so checked is true or false
	// save this value in local storage and emit so app scss can be changed
	onDarkModeSwitched({ checked }: MatSlideToggleChange): void {
		localStorage.setItem("darkMode", JSON.stringify(checked));
		this.darkModeSwitched.emit(checked);
	}
}
