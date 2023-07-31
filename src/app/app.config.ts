import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { provideRouter, withComponentInputBinding } from "@angular/router";

import { routes } from "./app.routes";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

export const appConfig: ApplicationConfig = {
	
	providers: [
		provideRouter(routes, withComponentInputBinding()),
		importProvidersFrom([BrowserAnimationsModule]),
	],
};
