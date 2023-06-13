import { Observable } from "rxjs";
import { DataItem } from "./data-item.model";
import {
  Component,
  OnInit,
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
    private firestoreDataService: FirestoreDataService,
    private title: Title
  ) {
    this.title.setTitle("Website Build Info");
  }

  ngOnInit(): void {
    this.dataItems$ = this.firestoreDataService.getData("tech");
  }

  cardTrackByFn(index: number, item: any): number {
    return item.cardId;
  }
}
