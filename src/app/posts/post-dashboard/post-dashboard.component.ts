import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';

import { PostService } from './../../services/post.service';
import { AuthService } from './../../services/auth.service';
import { AngularFireStorage } from '@angular/fire/storage';


@Component({
	selector: 'app-post-dashboard',
	templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.scss'],
  providers: [PostService]
})
export class PostDashboardComponent implements OnInit {
	content: string;
	image: string;
  imageby: string;
  imageLink: string;
  title: string;
  subtitle: string;
  category: string;

	uploadPercent: Observable<number>;
	downloadURL: Observable<string>;

	buttonText = 'Create Post';

	constructor(
    private router: Router,
		private auth: AuthService,
		private postService: PostService,
		private storage: AngularFireStorage
		) { }

	ngOnInit() {
	}

	createPost() {
		const postData = {
			// author: this.auth.authState.displayName || this.auth.authState.email,
			// authorId: this.auth.currentUserId,
			content: this.content,
			image: this.image || null,
      imageby: this.imageby,
      imageLink: this.imageLink,
      published: new Date(),
      title: this.title,
      subtitle: this.subtitle,
      category: this.category
		};
		this.postService.create(postData);
    this.title = '';
    this.subtitle = '';
    this.category = '';
		this.content = '';
		this.buttonText = 'Post Created';
    this.image = '';
    this.imageby = '';
    this.imageLink = '';
		setTimeout(() => (this.buttonText = 'Create Post'), 3000);
  }

  // returnToList() {
  //   this.router.navigate(['/blog']);
  // }

	uploadImage(event: any) {
		const file = event.target.files[0];
		const path = `posts/${file.name}`;
		const fileRef = this.storage.ref(path);
		if (file.type.split('/')[0] !== 'image') {
			return alert('only image files allowed');
		} else {
			const task = this.storage.upload(path, file);
			const ref = this.storage.ref(path);
			this.uploadPercent = task.percentageChanges();
			task.snapshotChanges().pipe(
				finalize(() => {
					this.downloadURL = ref.getDownloadURL();
					this.downloadURL.subscribe(url => (this.image = url));
				})
			)
			.subscribe();
      console.log('image uploaded');
		}
  }

}
