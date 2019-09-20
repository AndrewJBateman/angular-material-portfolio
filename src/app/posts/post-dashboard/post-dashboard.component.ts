import { Component, OnInit } from '@angular/core';

import { PostService } from './../../services/post.service';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-post-dashboard',
  templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.scss']
})
export class PostDashboardComponent implements OnInit {
  content: string;
  image: string;
  title: string;

  saving = 'Create Post';

  constructor(private auth: AuthService, private postService: PostService) { }

  ngOnInit() {
  }

  createPost() {
    const postData = {
      author: this.auth.authState.displayName || this.auth.authState.email,
      authorId: this.auth.currentUserId,
      content: this.content,
      image: this.image || null,
      published: new Date(),
      title: this.title
    };
    console.log(this.title);
    this.postService.create(postData);
  }

}
