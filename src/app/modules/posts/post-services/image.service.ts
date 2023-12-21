/**
 * ImageService handles fetching random images from Unsplash API.
 *
 * getRandomImage() takes a search query and returns an observable
 * with the API response containing a random image matching the query.
 *
 * It constructs the API request with the provided API key and parameters,
 * and returns the HTTP GET request observable.
 */
import { Injectable, inject } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../../../environments/environment";
import { Observable } from "rxjs";
import { IUnsplashResponse } from "../models/unsplash";

@Injectable({
	providedIn: "root",
})
export class ImageService {
	http = inject(HttpClient);

	getRandomImage(subject: string): Observable<IUnsplashResponse> {
		const url = `${environment.unsplash.API_URL}/photos/random`;
		const params = {
			query: subject,
			orientation: "landscape",
		};

		const headers = new HttpHeaders({
			Authorization: `Client-ID ${environment.unsplash.UNSPLASH_API_KEY}`,
			"Content-Type": "application/json",
		});

		return this.http.get<IUnsplashResponse>(url, { params, headers });
	}
}
