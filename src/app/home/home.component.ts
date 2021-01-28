import { Component, OnInit } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { GithubService } from "./../services/github.service";
import { User } from "../models/user";

import { AREAS } from "./areas";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  title = "Home";
  areas = AREAS;
  user: User;
  bio: string;
  repos: number;

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
