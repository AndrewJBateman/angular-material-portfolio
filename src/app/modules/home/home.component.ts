import { FirestoreDataService } from "./../../core/services/firestore-data.service";
import {
	Component,
	type OnInit,
	ChangeDetectionStrategy,
	inject,
} from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { Observable } from "rxjs";

import { type Area } from "./area.model";
import { MatCardModule } from "@angular/material/card";
import { NgIf, NgFor, AsyncPipe } from "@angular/common";

@Component({
	selector: "app-home",
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.scss"],
	standalone: true,
	imports: [NgIf, NgFor, MatCardModule, AsyncPipe],
})
export class HomeComponent implements OnInit {
	firestoreDataService = inject(FirestoreDataService);
	titleService = inject(Title);
	metaTagService = inject(Meta);

	title = "Home";
	areas$: Observable<Area[]>;

	ngOnInit(): void {
		const AREAS_COLLECTION = "areas";

		this.titleService.setTitle(this.title);
		this.metaTagService.updateTag({
			name: "home",
			content: "andrewbateman.org",
		});
		this.areas$ = this.firestoreDataService.getData(AREAS_COLLECTION);
	}

	trackByFn(index: number, area: Area): number {
		return area?.id;
	}
}
