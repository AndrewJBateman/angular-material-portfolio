import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ContactRoutingModule } from "./contact-routing.module";
import { ContactComponent } from "./contact.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import {
	MatSnackBarModule,
	MAT_SNACK_BAR_DEFAULT_OPTIONS,
} from "@angular/material/snack-bar";

@NgModule({
	declarations: [ContactComponent],
	imports: [
		CommonModule,
		ContactRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		MatFormFieldModule,
		MatButtonModule,
		MatInputModule,
		MatSnackBarModule,
	],
	exports: [ContactComponent],
	providers: [
		{
			provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
			useValue: {
				duration: 5000,
			},
		},
	],
})
export default class ContactModule {}
