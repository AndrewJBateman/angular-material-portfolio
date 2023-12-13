import { enableProdMode, importProvidersFrom } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { environment } from "./environments/environment";
import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { ServiceWorkerModule } from "@angular/service-worker";
import { provideFirestore, getFirestore } from "@angular/fire/firestore";
import { provideFirebaseApp, initializeApp } from "@angular/fire/app";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatDividerModule } from "@angular/material/divider";
import { SharedModule } from "./app/shared/shared.module";
import { NavModule } from "./app/core/nav/nav.module";
import {
	withInterceptorsFromDi,
	provideHttpClient,
} from "@angular/common/http";
import { NgxPictureModule, CLOUDINARY_CONFIG } from "ngx-picture";

if (environment.production) {
	enableProdMode();
}

document.addEventListener("DOMContentLoaded", () => {
	bootstrapApplication(AppComponent, {
		providers: [
			importProvidersFrom(
				NgxPictureModule.forRoot(CLOUDINARY_CONFIG),
				NavModule,
				SharedModule,
				MatDividerModule,
				MatSidenavModule,
				MatSlideToggleModule,
				MatToolbarModule,
				provideFirebaseApp(() => initializeApp({ ...environment.firebase })),
				provideFirestore(() => getFirestore()),
				ServiceWorkerModule.register("ngsw-worker.js", {
					enabled: environment.production,
				})
			),
			provideHttpClient(withInterceptorsFromDi()),
		],
	}).catch(err => {
		console.error(err);
	});
});
