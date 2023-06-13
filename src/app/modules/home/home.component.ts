import { FirestoreDataService } from './../../core/services/firestore-data.service';
import { Component, OnInit, ChangeDetectionStrategy, inject } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { Observable } from "rxjs";

import { Area } from "./area.model";

@Component({
  selector: "app-home",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  firestoreDataService = inject(FirestoreDataService);
  titleService = inject(Title);
  metaTagService = inject(Meta);

  title = "Home";
  areas$: Observable<Area[]>;

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag({
      name: "home",
      content: "andrewbateman.org",
    });
    this.areas$ = this.firestoreDataService.getData("areas");
  }

  trackByFn(index: number, area: Area): number {
    return area.id;
  }
}
