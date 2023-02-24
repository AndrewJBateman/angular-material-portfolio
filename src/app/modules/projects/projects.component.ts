import {
  Component,
  Input,
  OnInit,
  ChangeDetectionStrategy,
  ViewEncapsulation,
} from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";

import { ProjectsArray } from "./projects";
import { Project } from "./project.model";

@Component({
  selector: "app-projects",
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"],
})
export class ProjectsComponent implements OnInit {
  @Input() darkModeSwitched: Boolean = false;
  title = "Projects";
  projectsArray: Project[] = ProjectsArray;
  project: Project | undefined;

  constructor(private titleService: Title, private metaTagService: Meta) {}

  ngOnInit(): void {
    // console.log("dark mode?", this.darkModeSwitched);
    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag({
      name: "projects",
      content: "andrewbateman.org",
    });
  }

  tabTrackByFn(index: number, item: any): number {
    return item.tabId;
  }

  cardTrackByFn(index: number, item: any): number {
    return item.cardId;
  }
}
