import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { throwError, Observable } from "rxjs";

import { User } from "../models/user";
import { catchError, map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class GithubService {
  constructor(private http: HttpClient) {}

  getUserProfile(): Observable<User> {
    const githubUrl = "https://api.github.com/users/andrewjbateman";
    return this.http.get<User>(githubUrl).pipe(
      map((data: User) => data),
      catchError((err) => {
        return throwError(
          "There was a problem fetching data from Github API, error: ",
          err
        );
      })
      // tap((data: User) => console.log("github data", data)),
      // pluck("public_repos")
    );
  }
}
