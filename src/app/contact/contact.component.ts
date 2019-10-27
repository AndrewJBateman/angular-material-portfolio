import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

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
	imagePath = '/assets/images/laptop-desk.jpg';

	btnLabel = 'Send Message';

	constructor(private fb: FormBuilder, private afs: AngularFirestore, private router: Router) { }

	ngOnInit() {
		this.contactForm = this.fb.group({
			name: '',
			email: ['', [
				Validators.required,
				Validators.email
			]],
			message: ['', [
				Validators.required,
				Validators.minLength(4),
				Validators.maxLength(400)
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

	async submitHandler() {
		this.loading = true;
		this.btnLabel = 'Sending...';

		const formValue = this.contactForm.value;

		try {
			await this.afs.collection('contacts').add(formValue);
			this.success = true;
		} catch (err) {
			console.log(err);
		}
		this.imagePath = '/assets/images/thanks.jpg';
		this.loading = false;
	}

	goHome() {
		this.router.navigate(['/']);
	}
}
