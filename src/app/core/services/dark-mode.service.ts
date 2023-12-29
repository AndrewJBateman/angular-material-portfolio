/**
 * DarkModeService handles toggling dark mode on and off.
 *
 * It uses localStorage to persist the dark mode setting.
 * The isDarkModeEnabled property tracks whether dark mode is on.
 *
 * The initDarkMode method initializes the dark mode setting from localStorage.
 *
 * The toggleDarkMode method updates localStorage and emits an event
 * to notify components when dark mode changes.
 *
 * The darkModeSwitched EventEmitter allows components to subscribe to
 * dark mode change events.
 */
import { Injectable, Output, EventEmitter } from "@angular/core";

@Injectable({
	providedIn: "root",
})
export class DarkModeService {
	isDarkModeEnabled = false;
	DARK_MODE_KEY = "darkMode";

	@Output() readonly darkModeSwitched = new EventEmitter<boolean>();

	initDarkMode = () => {
		const localMode = localStorage.getItem(this.DARK_MODE_KEY);

		// If dark mode not defined in local storage then default to dark mode false
		// If dark mode is defined in local storage then parse value to define dark mode
		this.isDarkModeEnabled = localMode == null ? false : JSON.parse(localMode);
	};

	toggleDarkMode(checked: boolean): void {
		localStorage.setItem(this.DARK_MODE_KEY, JSON.stringify(checked));
		this.darkModeSwitched.emit(checked);
	}
}
