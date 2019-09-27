import { NgModule } from '@angular/core';
import {
	MatButtonModule,
	MatCardModule,
	MatExpansionModule,
	MatGridListModule,
	MatIconModule,
	MatInputModule,
	MatListModule,
	MatProgressBarModule,
	MatSidenavModule,
	MatToolbarModule,
} from '@angular/material';

@NgModule({
	exports: [
		MatButtonModule,
		MatCardModule,
		MatExpansionModule,
		MatGridListModule,
		MatIconModule,
		MatInputModule,
		MatListModule,
		MatProgressBarModule,
		MatSidenavModule,
		MatToolbarModule,
	]
})
export class MaterialModule { }
