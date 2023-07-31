import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import {
	FormBuilder,
	FormGroup,
	FormGroupDirective,
	Validators,
	FormsModule,
	ReactiveFormsModule,
} from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";

import { ContactModel } from "./models/contact.model";
import { EmailContactService } from "./services/email-contact.service";
import { MatButtonModule } from "@angular/material/button";
import { TextFieldModule } from "@angular/cdk/text-field";
import { NgIf } from "@angular/common";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";

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
  providers: [MatSnackBar]
})
export class ContactComponent implements OnInit {
	title = "Contact Page";
	contactForm: FormGroup;

	// Form state
	loading = false;
	success = "Message sent";
	failure = "Message not sent";

	constructor(
		private readonly formBuilder: FormBuilder,
		private readonly emailService: EmailContactService,
		private readonly matSnackBar: MatSnackBar,
		private readonly titleService: Title,
		private readonly metaTagService: Meta
	) {
		this.buildForm();
	}

	ngOnInit(): void {
		this.titleService.setTitle(this.title);
		this.metaTagService.updateTag({
			name: "contact",
			content: "andrewbateman.org",
		});
	}

	private buildForm() {
		this.contactForm = this.formBuilder.nonNullable.group({
			name: [
				"",
				[
					Validators.required,
					Validators.minLength(4),
					Validators.maxLength(100),
				],
			],
			email: ["", [Validators.required, Validators.email]],
			message: [
				"",
				[
					Validators.required,
					Validators.minLength(4),
					Validators.maxLength(400),
				],
			],
		});
	}

	submitHandler(formDirective: FormGroupDirective): void {
		const formValue: ContactModel = this.contactForm.value;
		this.emailService.sendEmail(formValue).subscribe({
			next: () => {
				this.matSnackBar.open(this.success, "OK", {
					panelClass: ["snackbar-common", "green-snackbar"],
				});
				formDirective.resetForm();
				this.contactForm.reset();
			},
			error: () => {
				this.matSnackBar.open(this.failure, "OK", {
					panelClass: ["snackbar-common", "red-snackbar"],
				});
			},
		});
	}
}
