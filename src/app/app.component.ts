import {
	Component,
	HostBinding,
	type OnInit,
	ChangeDetectionStrategy,
} from "@angular/core";
import { type Meta } from "@angular/platform-browser";

@Component({
	selector: "app-root",
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
	private isDark = false;

	@HostBinding("class")
	get themeMode(): string | boolean {
		return this.isDark ? "dark-theme" : "light-theme";
	}

	constructor(private readonly metaTagService: Meta) {
		// this will clear dark mode and post tab settings if page refreshed
		// window.onbeforeunload = function () {
		//   localStorage.clear();
		//   return "";
		// };
	}

	ngOnInit(): void {
		this.metaTagService.addTags([
			{
				name: "keywords",
				content: "Angular SEO Integration, posts, contact, projects, portfolio",
			},
			{ name: "robots", content: "index" },
			{ name: "author", content: "Andrew Bateman" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ name: "date", content: "2020-06-08", scheme: "YYYY-MM-DD" },
			{ charset: "UTF-8" },
		]);
	}

	switchMode(isDarkMode: boolean): void {
		this.isDark = isDarkMode;
	}
}
