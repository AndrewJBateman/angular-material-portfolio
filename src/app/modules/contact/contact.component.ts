import {
	Component,
	OnInit,
	inject,
	ChangeDetectionStrategy,
} from "@angular/core";
import { FormGroupDirective } from "@angular/forms";
import { Meta, Title } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
	MatSnackBar,
	MAT_SNACK_BAR_DEFAULT_OPTIONS,
} from "@angular/material/snack-bar";

import { ContactModel } from "./models/contact.model";
import { EmailContactService } from "./services/email-contact.service";
import { MatButtonModule } from "@angular/material/button";
import { TextFieldModule } from "@angular/cdk/text-field";
import { NgIf } from "@angular/common";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";

import { FormControlService } from "./services/form-control.service";

@Component({
	selector: "app-contact",
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: "./contact.component.html",
	styleUrls: ["./contact.component.scss"],
	standalone: true,
	imports: [
		FormsModule,
		ReactiveFormsModule,
		MatFormFieldModule,
		MatInputModule,
		NgIf,
		TextFieldModule,
		MatButtonModule,
	],
	providers: [
		MatSnackBar,
		FormControlService,
		{
			provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
			useValue: {
				duration: 3000,
				verticalPosition: 'center',
				horizontalPosition: "center",
        panelClass: ["snackbar-common"]
			},
		},
	],
})
export class ContactComponent implements OnInit {
	formControlService = inject(FormControlService);
	title = "Contact Page";

	constructor(
		private readonly emailService: EmailContactService,
		private readonly matSnackBar: MatSnackBar,
		private readonly titleService: Title,
		private readonly metaTagService: Meta
	) {
		this.formControlService.buildForm();
	}

	ngOnInit(): void {
		this.titleService.setTitle(this.title);
		this.metaTagService.updateTag({
			name: "contact",
			content: "andrewbateman.org",
		});
	}

	submitHandler(formDirective: FormGroupDirective): void {
		const formValue: ContactModel = this.formControlService.contactForm.value;
		this.emailService.sendEmail(formValue).subscribe({
			next: () => {
				this.matSnackBar.open(this.formControlService.success, "OK", {
					panelClass: ["green-snackbar"],
				});
				formDirective.resetForm();
				this.formControlService.resetForm();
			},
			error: () => {
				this.matSnackBar.open(this.formControlService.failure, "Error", {
					panelClass: ["red-snackbar"],
				});
			},
		});
	}
}
