import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { BehaviorSubject, Observable } from "rxjs";

import { AreasService } from "./home-services/areas.service";
import { Area } from "./area.model";

@Component({
  selector: "app-home",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  title = "Home";
  areas$: Observable<Area[]>;

  constructor(
    private metaTagService: Meta,
    private titleService: Title,
    private areasService: AreasService
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag({
      name: "home",
      content: "andrewbateman.org",
    });
    this.areas$ = this.areasService.getAreas();
  }

  trackByFn(index: number, area: Area): number {
    return area.id;
  }
}
