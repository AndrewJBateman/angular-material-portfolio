import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { Post } from '../post';
import { PostService } from './../../services/post.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
	selector: 'app-post-list',
	templateUrl: './post-list.component.html',
	styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
	posts: Observable<Post[]>;

	constructor(private postService: PostService, public auth: AuthService) { }

	ngOnInit() {
		this.posts = this.postService.getPosts();
		console.log('posts', this.posts);
	}
}
