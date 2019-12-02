import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { PostService } from '../../services/post.service';
import { Post } from '../post';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  post: Post;
  editing = false;
  selectedCategory: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public auth: AuthService,
    private postService: PostService
  ) { }

  ngOnInit() {
    this.getPost();
  }

  getPost() {
    const id = this.route.snapshot.paramMap.get('id');
    return this.postService
      .getPostData(id)
      .subscribe(data => this.post = data);
  }

  updatePost() {
    const formData = {
      title: this.post.title,
      subtitle: this.post.subtitle,
      imageby: this.post.imageby,
      imageLink: this.post.imageLink,
      category: this.post.category,
      content: this.post.content,
      published: new Date()
    };
    const id = this.route.snapshot.paramMap.get('id');
		this.postService.update(id, formData);
		this.editing = false;
  }

  delete() {
    const id = this.route.snapshot.paramMap.get('id');
    this.postService.delete(id);
    this.router.navigate(['/blog']);

  }

  returnToList() {
    this.router.navigate(['/blog']);
  }

  isLoggedIn() {
    return this.auth.authState != null;
  }
}
