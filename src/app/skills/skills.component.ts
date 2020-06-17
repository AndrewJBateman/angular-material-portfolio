import { Component } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";

import { SKILLS } from "./skills";

@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.scss"],
})
export class SkillsComponent {
  title = "List of skills";

  skills = SKILLS;

  constructor(private titleService: Title, private metaTagService: Meta) {}

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag({
      name: "skills",
      content: "andrewbateman.org",
    });
  }
}
