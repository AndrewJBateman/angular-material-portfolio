import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
// import 'rxjs/add/operator';
import { ContactModel } from '../../app/contact/contact.model';

@Injectable({
	providedIn: 'root'
})
export class EmailService {

	constructor(private http: HttpClient) { }

	// promise used instead of observable as only executed once. Simpler as no unsubscribe is necessary.
	public sendEmail(contactForm: ContactModel): Promise<any> {
		const url = 'https://formspree.io/gomezbateman@yahoo.com';
		return this.http.post(url, contactForm).toPromise();
	}
}
