import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { Post } from '../../post';

@Component({
  selector: 'app-post-detail',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent {
  post: Post;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.post = this.router.getCurrentNavigation().extras.state.post;
    })
  }

  onNavigateBackToPosts(): void {
    this.router.navigate(["/blog"]);
  }

}
