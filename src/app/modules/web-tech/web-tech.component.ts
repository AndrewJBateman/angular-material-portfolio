import { Observable } from "rxjs";
import { DataItem } from "./data-item.model";
import {
	Component,
	type OnInit,
	ChangeDetectionStrategy,
	inject,
} from "@angular/core";
import { Title } from "@angular/platform-browser";
import { BreakpointService } from "../../core/services/breakpoint.service";
import { FirestoreDataService } from "src/app/core/services/firestore-data.service";

@Component({
	selector: "app-web-tech",
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: "./web-tech.component.html",
	styleUrls: ["./web-tech.component.scss"],
})
export class WebTechComponent implements OnInit {
	breakpointService = inject(BreakpointService);

	dataItems$: Observable<DataItem[]>;
	columns$ = this.breakpointService.columns$;

	constructor(
		private readonly firestoreDataService: FirestoreDataService,
		private readonly title: Title
	) {
		this.title.setTitle("Website Build Info");
	}

	ngOnInit(): void {
		this.dataItems$ = this.firestoreDataService.getData("tech");
	}

	cardTrackByFn(index: number, item: DataItem): number {
		return item.id;
	}
}
