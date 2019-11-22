import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
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
  imageAlt = 'photo of someone typing at a laptop on a desk';

	constructor(
    private fb: FormBuilder,
    private afs: AngularFirestore,
    private router: Router,
    private location: Location
  ) { }

	ngOnInit() {
    this.fillForm();
  }
  
  private fillForm() {
    this.contactForm = this.fb.group({
			name: ['', [
				Validators.required,
				Validators.minLength(4),
				Validators.maxLength(100)
			]],
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

		const formValue = this.contactForm.value;

		try {
			await this.afs.collection('contacts').add(formValue);
			this.success = true;
		} catch (err) {
			console.log(err);
		}
    this.imagePath = '/assets/images/thanks.jpg';
    this.imageAlt = 'photo of a card with the word thanks on a wooden table';
		this.loading = false;
	}

	goHome() {
		this.router.navigate(['/']);
  }

  goBack() {
    this.location.back();
  }
  
  sendAnother() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/contact']);
  }  

}
