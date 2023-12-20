import {
	Component,
	OnInit,
	ChangeDetectionStrategy,
	ViewEncapsulation,
	inject,
} from "@angular/core";
import { Observable } from "rxjs";

import { Meta, Title } from "@angular/platform-browser";

import { Project } from "./project.model";
import { BreakpointService } from "../../core/services/breakpoint.service";
import { FirestoreDataService } from "./../../core/services/firestore-data.service";
import { MatCardModule } from "@angular/material/card";
import { NgFor, NgIf, AsyncPipe, SlicePipe } from "@angular/common";
import { MatTabsModule } from "@angular/material/tabs";

@Component({
	selector: "app-projects",
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None,
	templateUrl: "./projects.component.html",
	styleUrls: ["./projects.component.scss"],
	standalone: true,
	imports: [MatTabsModule, NgFor, NgIf, MatCardModule, AsyncPipe, SlicePipe],
})
export class ProjectsComponent implements OnInit {
	breakpointService = inject(BreakpointService);
	firestoreDataService = inject(FirestoreDataService);
	titleService = inject(Title);
	metaTagService = inject(Meta);

	BreakpointColumnNr$ = this.breakpointService.breakpointColumnNr$;

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

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	tabTrackByFn(index: number, item: any): number {
		return item?.tabId;
	}

	trackProjectById(index: number, project: Project): number {
		return +project?.id;
	}
}
