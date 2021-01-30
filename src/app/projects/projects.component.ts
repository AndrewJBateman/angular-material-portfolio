import { Component, OnInit } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";

import { PROJECTS } from "./projects";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"],
})
export class ProjectsComponent implements OnInit {
  title = "Projects";

  projects = PROJECTS;

  constructor(private titleService: Title, private metaTagService: Meta) {}

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag({
      name: "projects",
      content: "andrewbateman.org",
    });
  }
}
