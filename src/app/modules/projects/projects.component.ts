import { Component, Input, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";

import { ProjectsArray } from "./projects";
import { Project } from './project.model';

@Component({
  selector: "app-projects",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"],
})
export class ProjectsComponent implements OnInit {
  @Input() darkModeSwitched: Boolean;
  title = "Projects";
  projectsArray: Project[] = ProjectsArray;
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
