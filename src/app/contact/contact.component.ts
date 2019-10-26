import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { ContactModel } from './contact.model';

import { EmailService } from '../services/email.service';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
	contactForm: FormGroup;

	// Form state
	loading = false;
	success = false;

	btnLabel = 'Send Message';

	constructor(private fb: FormBuilder, private emailService: EmailService) { }

	ngOnInit() {
		this.contactForm = this.fb.group({
			name: '',
			email: ['', [
				Validators.required,
				Validators.email
			]],
			message: ['', [
				Validators.required,
				Validators.minLength(10),
				Validators.maxLength(300)
			]]
		});

		this.contactForm.valueChanges.subscribe(console.log);
	}

	get name() {
		return this.contactForm.get('name');
	}

	get email() {
		return this.contactForm.get('email');
	}

	get message() {
		return this.contactForm.get('message');
	}

	submitHandler() {
		console.log(this.contactForm.value);
		this.loading = true;
		this.btnLabel = 'Sending...';
		this.emailService.sendEmail(this.contactForm.value)
			.then(res => this.handleResponse(res))
			.catch(err => this.handleError(err));
	}

	private handleResponse(res): void {
		this.contactForm.setValue({
			name: '',
			email: '',
			comment: ''
		});
	}

	private handleError(err: any): void {
		console.log('error: ', err);
	}

}
