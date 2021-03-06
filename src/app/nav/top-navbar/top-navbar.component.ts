import { Component, Output, EventEmitter } from "@angular/core";
import { MatSlideToggleChange } from "@angular/material/slide-toggle";

@Component({
  selector: "app-top-navbar",
  templateUrl: "./top-navbar.component.html",
  styleUrls: ["./top-navbar.component.scss"],
})
export class TopNavbarComponent {
  @Output()
  readonly darkModeSwitched = new EventEmitter();

  @Output() public sidenavToggle = new EventEmitter<boolean>();

  public onToggleSidenav = (): void => {
    this.sidenavToggle.emit();
  };

  onDarkModeSwitched({ checked }: MatSlideToggleChange): void {
    return this.darkModeSwitched.emit(checked);
  }
}
