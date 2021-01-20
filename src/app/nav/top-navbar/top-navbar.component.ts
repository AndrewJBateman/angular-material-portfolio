import { Component, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";

import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-top-navbar",
  templateUrl: "./top-navbar.component.html",
  styleUrls: ["./top-navbar.component.scss"],
})
export class TopNavbarComponent {
  displayLogin = false; /* initially displayLogin is false*/
  loggedIn = false;

  @Output() public sidenavToggle = new EventEmitter();

  constructor(public auth: AuthService, router: Router) {
    /*  displayLogin only true when on blog list or blog detail page
        as we don't need to login anywhere else*/
    router.events.subscribe(() => {
      if (router.url.includes("/blog")) {
        this.displayLogin = true;
      } else if (
        router.url === "/home" ||
        "/projects" ||
        "/projects/:projectId" ||
        "/skills" ||
        "/contact" ||
        "/404"
      ) {
        this.displayLogin = false;
      }
    });
  }

  public onToggleSidenav = (): void => {
    this.sidenavToggle.emit();
  };

}
