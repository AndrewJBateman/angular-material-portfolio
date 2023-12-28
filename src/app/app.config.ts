import {
	ApplicationConfig,
	importProvidersFrom,
	isDevMode,
} from "@angular/core";
import { provideRouter } from "@angular/router";

import { routes } from "./app.routes";
import { provideServiceWorker } from "@angular/service-worker";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

export const appConfig: ApplicationConfig = {
	providers: [
		provideRouter(routes),
		provideServiceWorker("ngsw-worker.js", {
			enabled: !isDevMode(),
			registrationStrategy: "registerWhenStable:30000",
		}),
		importProvidersFrom([BrowserAnimationsModule]),
	],
};
