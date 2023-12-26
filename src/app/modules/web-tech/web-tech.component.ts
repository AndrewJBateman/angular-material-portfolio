/**
 * WebTechComponent displays information about the technologies used to build the website.
 *
 * It imports RxJS Observables and components from Angular framework.
 *
 * The component class fetches data from a Firestore database service, transforms it with pipes,
 * and renders it with Angular template bindings.
 *
 * It implements OnInit to initialize on component load.
 *
 * The template uses Angular Material card components to display the data.
 */
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
import { FirestoreDataService } from "../../core/services/firestore-data.service";
import { PackageConvertPipe } from "./package-convert.pipe";
import { MatCardModule } from "@angular/material/card";
import { AsyncPipe } from "@angular/common";

@Component({
	selector: "app-web-tech",
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: "./web-tech.component.html",
	styleUrls: ["./web-tech.component.scss"],
	standalone: true,
	imports: [MatCardModule, AsyncPipe, PackageConvertPipe],
})
export class WebTechComponent implements OnInit {
	breakpointService = inject(BreakpointService);

	techDataItems$: Observable<DataItem[]>;
	BreakpointColumnNr$ = this.breakpointService.breakpointColumnNr$;

	constructor(
		private readonly firestoreDataService: FirestoreDataService,
		private readonly title: Title
	) {
		this.title.setTitle("Website Build Info");
	}

	ngOnInit(): void {
		this.init();
	}

	init() {
		this.title.setTitle("Website Build Info");
		this.techDataItems$ = this.firestoreDataService.getData("tech");
	}

	trackByFn(index: number, item: DataItem) {
		return item.id;
	}
}
