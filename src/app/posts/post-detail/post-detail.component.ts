import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { PostService } from "../../services/post.service";
import { Post } from "../post";

@Component({
  selector: "app-post-detail",
  templateUrl: "./post-detail.component.html",
  styleUrls: ["./post-detail.component.scss"],
})
export class PostDetailComponent implements OnInit {
  post: Post;
  selectedCategory: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    this.getPost();
  }

  getPost(): any {
    const id = this.route.snapshot.paramMap.get("id");
    return this.postService
      .getPostData(id)
      .subscribe((data) => (this.post = data));
  }

  returnToList(): any {
    this.router.navigate(["/blog"]);
  }
}
