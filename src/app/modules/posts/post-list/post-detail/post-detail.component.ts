import {
	Component,
	ChangeDetectionStrategy,
	OnInit,
	inject,
	CUSTOM_ELEMENTS_SCHEMA,
} from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Location, AsyncPipe } from "@angular/common";

import { Post } from "../../post.model";
import { Observable, catchError, throwError } from "rxjs";
import { IUnsplashResponse } from "../../models/unsplash";
import { ImageService } from "../../post-services/image.service";
import { MatCardModule } from "@angular/material/card";
import { NgxPictureModule } from "ngx-picture";

@Component({
	selector: "app-post-detail",
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: "./post-detail.component.html",
	styleUrls: ["./post-detail.component.scss"],
	standalone: true,
	imports: [MatCardModule, AsyncPipe, NgxPictureModule],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PostDetailComponent implements OnInit {
	activatedRoute = inject(ActivatedRoute);
	router = inject(Router);
	location = inject(Location);
	imageService = inject(ImageService);
	postDetails: Post | undefined | null;
	imageData$ = new Observable<IUnsplashResponse>();

	constructor() {
		this.activatedRoute.queryParams.subscribe(() => {
			const state = this.getRouteData();
			this.postDetails = state !== null ? state?.post : null;
		});
	}

	ngOnInit(): void {
		this.getPhoto(this.postDetails!.image);
	}

	getRouteData() {
		return this.router?.getCurrentNavigation()?.extras?.state;
	}

	onNavigateBackToPosts(): void {
		this.location.back();
	}

	getPhoto(subject: string): void {
		this.imageData$ = this.imageService.getRandomImage(subject).pipe(
			catchError(error => {
				// handle error
				return throwError(() => new Error(error));
			})
		);
	}
}
