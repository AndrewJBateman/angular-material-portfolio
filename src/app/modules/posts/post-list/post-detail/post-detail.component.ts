import {
	Component,
	ChangeDetectionStrategy,
	OnInit,
	inject,
  CUSTOM_ELEMENTS_SCHEMA,
} from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Location, NgIf, AsyncPipe } from "@angular/common";

import { Post } from "../../post.model";
import { Observable } from "rxjs";
import { IUnsplashResponse } from "../../models/unsplash";
import { ImageService } from "../../post-services/image.service";
import { MatCardModule } from "@angular/material/card";

@Component({
	selector: "app-post-detail",
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: "./post-detail.component.html",
	styleUrls: ["./post-detail.component.scss"],
	standalone: true,
	imports: [
		MatCardModule,
		NgIf,
		AsyncPipe,
	],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PostDetailComponent implements OnInit {
	activatedRoute = inject(ActivatedRoute);
	router = inject(Router);
	location = inject(Location);
	imageService = inject(ImageService);
	post: Post | undefined | null;
	imageData$ = new Observable<IUnsplashResponse>();

	constructor() {
		this.activatedRoute.queryParams.subscribe(() => {
			const routeData = this.router?.getCurrentNavigation()?.extras;
			const state = routeData?.state;
			this.post = state != null ? state?.post : null;
		});
	}

	ngOnInit(): void {
		this.getPhoto(this.post!.image);
	}

	onNavigateBackToPosts(): void {
		this.location.back();
	}

	getPhoto(subject: string): void {
    console.log('subject: ', subject);
		this.imageData$ = this.imageService.photoQuery(subject);
	}
}
