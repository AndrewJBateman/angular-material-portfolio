import { Component, OnDestroy, OnInit } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { GithubService } from "./../services/github.service";

import { AREAS } from "./areas";
import { Subscription } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit, OnDestroy {
  title = "Home";
  areas = AREAS;
  repos: number;
  subscription: Subscription;

  constructor(
    private githubService: GithubService,
    private metaTagService: Meta,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.getRepoData();
    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag({
      name: "home",
      content: "andrewbateman.org",
    });
  }

  getRepoData(): void {
    this.subscription = this.githubService
      .getNumberRepos()
      .subscribe((data) => {
        this.repos = data;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
