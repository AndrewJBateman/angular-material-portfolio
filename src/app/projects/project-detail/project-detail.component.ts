import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Project } from "../project.module";

import { PROJECTS } from "../projects";

@Component({
  selector: "app-project-detail",
  templateUrl: "./project-detail.component.html",
  styleUrls: ["./project-detail.component.scss"],
})
export class ProjectDetailComponent implements OnInit {
  project: Project;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.project = PROJECTS[+params.get("projectId")];
    });
  }

  returnToList(): void {
    this.router.navigate(["/projects"]);
  }
}
