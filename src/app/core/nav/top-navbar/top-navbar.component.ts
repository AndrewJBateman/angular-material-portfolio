import {
	Component,
	Output,
	EventEmitter,
	inject,
	type OnInit,
} from "@angular/core";
import { type MatSlideToggleChange } from "@angular/material/slide-toggle";

import { BreakpointService } from "../../services/breakpoint.service";

@Component({
	selector: "app-top-navbar",
	templateUrl: "./top-navbar.component.html",
	styleUrls: ["./top-navbar.component.scss"],
})
export class TopNavbarComponent implements OnInit {
	breakpointService = inject(BreakpointService);
	columns$ = this.breakpointService.columns$;

	isDarkMode = false;

	@Output() readonly darkModeSwitched = new EventEmitter<boolean>();
	@Output() public sidenavToggle = new EventEmitter<boolean>();

	ngOnInit(): void {
		const localMode = localStorage.getItem("darkMode");

		// If dark mode not defined in local storage then default to dark mode false
		// If dark mode is defined in local storage then parse value to define dark mode
		this.isDarkMode = localMode == null ? false : JSON.parse(localMode);
		this.darkModeSwitched.emit(this.isDarkMode);
	}

	onToggleSidenav = (): void => {
		this.sidenavToggle.emit();
	};

	// user can toggle dark mode so checked if true or false
	// save this value in local storage and emit so app scss can be changed
	onDarkModeSwitched({ checked }: MatSlideToggleChange): void {
		localStorage.setItem("darkMode", JSON.stringify(checked));
		this.darkModeSwitched.emit(checked);
	}
}
