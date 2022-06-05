import { DataItem } from "./data-item.model";
import { DataItems } from "./data-items";
import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-web-tech",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./web-tech.component.html",
  styleUrls: ["./web-tech.component.scss"],
})
export class WebTechComponent implements OnInit {
  dataItems: DataItem[] = DataItems;
  // buildDate: string;

  constructor(private title: Title) {
    this.title.setTitle("Website Build Info");
  }

  ngOnInit(): void {
  }

  onGoToDependencyDetail = () => {};
}
