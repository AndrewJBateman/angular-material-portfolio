import {
	Component,
	ChangeDetectionStrategy,
	inject,
	OnInit,
} from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { type Observable } from "rxjs";

import { BreakpointService } from "../../core/services/breakpoint.service";
import { FirestoreDataService } from "./../../core/services/firestore-data.service";
import { type Skill } from "./skill.model";

@Component({
	selector: "app-skills",
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: "./skills.component.html",
	styleUrls: ["./skills.component.scss"],
})
export class SkillsComponent implements OnInit {
	breakpointService = inject(BreakpointService);
	firestoreDataService = inject(FirestoreDataService);
	titleService = inject(Title);
	metaTagService = inject(Meta);

	columns$ = this.breakpointService.columns$;

	title = "List of skills";
	skills$: Observable<Skill[]>;

	ngOnInit(): void {
		this.titleService.setTitle(this.title);
		this.metaTagService.updateTag({
			name: "skills",
			content: "andrewbateman.org",
		});
		this.skills$ = this.firestoreDataService.getData("skills");
	}

	trackByFn(index: number, skill: Skill): number {
		return skill.id;
	}
}
