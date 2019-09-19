import { Component, OnInit, Output, EventEmitter  } from '@angular/core';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.scss']
})
export class TopNavbarComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }
}
