import { inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

// @Injectable({
// 	providedIn: "root",
// })

const SUCCESS_MESSAGE = "Message sent";
const FAILURE_MESSAGE = "Message not sent";

export class FormControlService {
	private formBuilder = inject(FormBuilder);
	contactForm: FormGroup;

  // Form state
  success = SUCCESS_MESSAGE;
	failure = FAILURE_MESSAGE;
  loading = false;

	initContactForm() {
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
