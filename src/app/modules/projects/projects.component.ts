import { Component, Input, OnInit } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";

import { PROJECTS } from "./projects";
import { Project } from './project.module';

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"],
})
export class ProjectsComponent implements OnInit {
  @Input() darkModeSwitched: Boolean;
  title = "Projects";

  projects: Project[] = PROJECTS;
  project: Project;

  constructor(private titleService: Title, private metaTagService: Meta) {}

  ngOnInit(): void {
    // console.log("dark mode?", this.darkModeSwitched);
    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag({
      name: "projects",
      content: "andrewbateman.org",
    });
  }
}
