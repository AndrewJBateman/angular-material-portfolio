import {
  Component,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  inject,
  OnInit,
} from "@angular/core";
import { MatSlideToggleChange } from "@angular/material/slide-toggle";
import { BreakpointService } from "../../services/breakpoint.service";

@Component({
  selector: "app-top-navbar",
  templateUrl: "./top-navbar.component.html",
  styleUrls: ["./top-navbar.component.scss"],
})
export class TopNavbarComponent implements OnInit {
  breakpointService = inject(BreakpointService);
  columns$ = this.breakpointService.columns$;
  @Output()
  readonly darkModeSwitched = new EventEmitter();

  @Output() public sidenavToggle = new EventEmitter<boolean>();

  ngOnInit(): void {
    const localMode = localStorage.getItem("darkMode");
    const isDarkMode: Boolean =
      localMode == null ? false : JSON.parse(localMode);
    return this.darkModeSwitched.emit(isDarkMode);
  }

  public onToggleSidenav = (): void => {
    this.sidenavToggle.emit();
  };

  onDarkModeSwitched({ checked }: MatSlideToggleChange): void {
    localStorage.setItem("darkMode", JSON.stringify(checked));
    return this.darkModeSwitched.emit(checked);
  }
}
