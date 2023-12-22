import { Injectable, inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Injectable({
	providedIn: "root",
})
export class FormControlService {
	formBuilder = inject(FormBuilder);
	contactForm: FormGroup;

	// Form state
	loading = false;
	success = "Message sent";
	failure = "Message not sent";

	buildForm() {
    this.loading = true;
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

  resetForm() {
    this.loading = false;
  } 
}
