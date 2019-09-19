import { Component, OnInit, Output, EventEmitter  } from '@angular/core';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.scss']
})
export class SideNavbarComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();
  
  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

}
