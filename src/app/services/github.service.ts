import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";

import { User } from "../models/user";
import { catchError, pluck } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class GithubService {
  constructor(private http: HttpClient) {}

  getNumberRepos(): Observable<number> {
    const githubUrl = "https://api.github.com/users/andrewjbateman";
    return this.http.get<User>(githubUrl).pipe(
      pluck("public_repos"),
      catchError((err) => {
        return throwError(
          "There was a problem fetching data from Github API, error: ",
          err
        );
      })
    );
  }
}
