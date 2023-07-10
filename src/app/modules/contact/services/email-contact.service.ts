import { ContactModel } from "./../models/contact.model";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
	providedIn: "root",
})
export class EmailContactService {
	formspreeUrl = "https://formspree.io/f/maykykvq";
	jsonHeader = new HttpHeaders({ "Content-Type": "application/json" });

	constructor(private readonly http: HttpClient) {}

	sendEmail(form: Partial<ContactModel>) {
		return this.http.post(
			this.formspreeUrl,
			{ name: form.name, replyto: form.email, message: form.message },
			{ headers: this.jsonHeader }
		);
	}
}
