import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, shareReplay, take } from "rxjs/operators";
import { Observable, of } from "rxjs";
import { environment } from "../../../../environments/environment";

const httpOptions: {
	headers: any;
	observe: any;
	params: any;
	responseType: any;
} = {
	headers: new HttpHeaders({
		Authorization: "Client-ID " + environment.unsplash.UNSPLASH_API_KEY,
		"Content-Type": "application/json",
	}),
	observe: "response",
	params: "HttpParams",
	responseType: "json",
};

@Injectable({
	providedIn: "root",
})
export class ImageService {
	readonly baseUrl = "https://api.unsplash.com";

	constructor(private readonly http: HttpClient) {}

	photoQuery(subject: string): Observable<any> {
		return this.http
			.get(
				`${this.baseUrl}/photos/random?query=${subject}&orientation=landscape`,
				httpOptions
			)
			.pipe(
				take(1),
				catchError(_ => of("Error fetching image data")),
				shareReplay(1)
			);
	}
}
