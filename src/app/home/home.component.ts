import { Component, OnInit } from '@angular/core';
import { GithubService } from './../services/github.service';

import { AREAS } from './areas';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	areas = AREAS;
	profile: any;
	repos: number;

	constructor(private githubService: GithubService) { }

	getRepoData(): void {
		this.githubService.getUserProfile()
			.subscribe(resultArray => {
				this.profile = resultArray;
				this.repos = this.profile.public_repos;
				console.log('profile:', this.profile);

			});
	}

	ngOnInit(): void {
		this.getRepoData();
	}

}
