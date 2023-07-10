import {
	Component,
	Input,
	type OnInit,
	ChangeDetectionStrategy,
	ViewEncapsulation,
	inject,
} from "@angular/core";
import { type Observable } from "rxjs";

import { Meta, Title } from "@angular/platform-browser";

import { type Project } from "./project.model";
import { BreakpointService } from "../../core/services/breakpoint.service";
import { FirestoreDataService } from "./../../core/services/firestore-data.service";

@Component({
	selector: "app-projects",
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None,
	templateUrl: "./projects.component.html",
	styleUrls: ["./projects.component.scss"],
})
export class ProjectsComponent implements OnInit {
	breakpointService = inject(BreakpointService);
	firestoreDataService = inject(FirestoreDataService);
	titleService = inject(Title);
	metaTagService = inject(Meta);

	columns$ = this.breakpointService.columns$;

	// @Input() darkModeSwitched: Boolean = false;

	title = "Projects";
	areas = ["Javascript", "Full-Stack", "Node"];
	projects$: Observable<Project[]>;
	project: Project | undefined;

	ngOnInit(): void {
		this.titleService.setTitle(this.title);
		this.metaTagService.updateTag({
			name: "projects",
			content: "andrewbateman.org",
		});
		this.projects$ = this.firestoreDataService.getData("projects");
	}

	tabTrackByFn(index: number, item: any): number {
		return item.tabId;
	}

	cardTrackByFn(index: number, project: Project): number {
		return +project.id;
	}
}
