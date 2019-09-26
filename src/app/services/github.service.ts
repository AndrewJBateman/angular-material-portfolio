import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';



@Injectable({
	providedIn: 'root'
})
export class GithubService {


	constructor(private http: HttpClient) { }

	getUserProfile(): Observable<any> {
		const githubUrl = 'https://api.github.com/users/andrewjbateman';
		return this.http.get(githubUrl);
	}
}
