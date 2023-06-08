import {
  Component,
  Input,
  OnInit,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  inject,
} from "@angular/core";
import { Observable, tap } from "rxjs";
import { map } from "rxjs/operators";

import { Meta, Title } from "@angular/platform-browser";

import { Project } from "./project.model";
import { ProjectService } from "./project-services/project.service";
import { BreakpointService } from "../../core/breakpoint.service";

@Component({
  selector: "app-projects",
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"],
})
export class ProjectsComponent implements OnInit {
  breakpointService = inject(BreakpointService);
  columns$ = this.breakpointService.columns$;

  @Input() darkModeSwitched: Boolean = false;

  title = "Projects";
  areas = ["Javascript", "Full-Stack", "Node"];
  projects$: Observable<Project[]>;
  project: Project | undefined;

  constructor(
    private titleService: Title,
    private metaTagService: Meta,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {
    // console.log("dark mode?", this.darkModeSwitched);
    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag({
      name: "projects",
      content: "andrewbateman.org",
    });
    this.projects$ = this.projectService.getProjects().pipe(
      tap((val) => console.log(val)),
      map((val) => val)
    );
  }

  tabTrackByFn(index: number, item: any): number {
    return item.tabId;
  }

  cardTrackByFn(index: number, item: any): number {
    return item.cardId;
  }
}
