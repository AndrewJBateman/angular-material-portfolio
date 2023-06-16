import { Component, Output, EventEmitter, ChangeDetectionStrategy, inject } from "@angular/core";
import { MatSlideToggleChange } from "@angular/material/slide-toggle";
import { BreakpointService } from "../../services/breakpoint.service";

@Component({
  selector: "app-top-navbar",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./top-navbar.component.html",
  styleUrls: ["./top-navbar.component.scss"],
})
export class TopNavbarComponent {
  breakpointService = inject(BreakpointService);
  columns$ = this.breakpointService.columns$;
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
