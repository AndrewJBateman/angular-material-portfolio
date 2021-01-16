import { Component, OnInit } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { GithubService } from "./../services/github.service";

import { AREAS } from "./areas";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  title = "Home";
  areas = AREAS;
  user: any;
  bio: string;
  repos: number;
  lastUpdated: string;

  constructor(
    private githubService: GithubService,
    private metaTagService: Meta,
    private titleService: Title
  ) {}

  getRepoData(): void {
    this.githubService.getUserProfile().subscribe((user) => {
      this.user = user;
      this.bio = this.user.bio;
      this.repos = this.user.public_repos;
      this.lastUpdated = this.user.updated_at;
    });
  }

  ngOnInit(): void {
    this.getRepoData();
    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag({
      name: "home",
      content: "andrewbateman.org",
    });
  }
}
