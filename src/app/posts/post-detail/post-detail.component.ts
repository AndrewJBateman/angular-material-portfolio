import { Component, OnInit, Inject, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser, Location } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
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
    private storageService: StorageService,
    private location: Location,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  ngOnInit(): void {
    // check if platform browser then show stored post
    if (isPlatformBrowser(this.platformId)) {
      this.getPost();
    } else {
      console.log("There are no posts in storage");
    }
  }

  getPost(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.post = this.storageService.get("storedPosts")[id];
  }

  returnToList(): any {
    this.location.back();
  }
}
