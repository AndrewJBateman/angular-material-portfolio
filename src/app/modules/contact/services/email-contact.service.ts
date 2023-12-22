/**
 * EmailContactService handles contacting the API for sending emails.
 *
 * It injects HttpClient and sets up the URL and headers for the Formspree API.
 *
 * The main methods are:
 *
 * sendEmail - Sends the email by calling makeRequest
 * makeRequest - Makes the HTTP request to the Formspree API
 */
import { ContactModel } from "./../models/contact.model";
import { Injectable, inject } from "@angular/core";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../../../environments/environment";

@Injectable({
	providedIn: "root",
})
export class EmailContactService {
	http = inject(HttpClient);

	formspreeUrl = environment.formspree.FORMSPREE_URL;

	jsonHeader = new HttpHeaders({ "Content-Type": "application/json" });

	sendEmail(form: Partial<ContactModel>) {
		return this.makeRequest(form);
	}

	makeRequest(form: Partial<ContactModel>) {
		return this.http
			.post(
				this.formspreeUrl,
				{ name: form.name, replyto: form.email, message: form.message },
				{ headers: this.jsonHeader }
			)
			.pipe(
				catchError(err => {
					// Handle error
					return throwError(() => err);
				})
			);
	}
}
