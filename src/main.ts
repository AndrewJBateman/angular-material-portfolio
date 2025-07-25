import { enableProdMode, importProvidersFrom } from "@angular/core";
import { provideAnimations } from "@angular/platform-browser/animations";
import { environment } from "./environments/environment";
import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
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
				MatToolbarModule
			),
			provideFirebaseApp(() => initializeApp(environment.firebase)),
			provideFirestore(() => getFirestore()),
			provideHttpClient(withInterceptorsFromDi()),
			provideAnimations(),
		],
	}).catch(err => {
		console.error(err);
	});
});
