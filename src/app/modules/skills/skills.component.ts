import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { Skill } from "./skill.module";

import { SKILLS } from "./skills";

@Component({
  selector: "app-skills",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.scss"],
})
export class SkillsComponent {
  title = "List of skills";

  skills = SKILLS;

  constructor(private titleService: Title, private metaTagService: Meta) {}

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag({
      name: "skills",
      content: "andrewbateman.org",
    });
  }

  trackByFn(index: number, skill: Skill): number {
    return skill.id;
  }
}
