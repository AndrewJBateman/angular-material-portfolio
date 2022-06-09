import { Component, Output, EventEmitter, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-side-navbar",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./side-navbar.component.html",
  styleUrls: ["./side-navbar.component.scss"],
})
export class SideNavbarComponent {
  @Output() sidenavClose = new EventEmitter();

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  public onSidenavClose = () => {
    this.sidenavClose.emit();
  };
}
