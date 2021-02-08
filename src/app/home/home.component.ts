import { Component, OnInit } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { GithubService } from "./../services/github.service";

import { AREAS } from "./areas";
import { Observable } from "rxjs";
import { Area } from "./area.module";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  title = "Home";
  areas = AREAS;
  repos: Observable<number>;

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

  getRepoData(): Observable<number> {
    this.repos = this.githubService.getNumberRepos();
    return this.repos;
  }

  trackByFn(index: number, area: Area): number {
    return area.id; // unique id corresponding to the item
  }
}
