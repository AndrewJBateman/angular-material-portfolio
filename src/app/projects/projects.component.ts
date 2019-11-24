import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { PROJECTS } from './projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = PROJECTS;

  constructor(private router: Router) { }

}
