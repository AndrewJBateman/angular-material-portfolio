import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Post } from "../models/post";
import { StorageService } from "../post-services/storage.service";

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
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    this.getPost();
  }

  getPost(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.post = this.storageService.get("storedPosts")[id];
  }

  returnToList(): any {
    this.router.navigate(["/blog"]);
  }
}
