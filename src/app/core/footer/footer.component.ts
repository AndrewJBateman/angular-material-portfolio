import { Component, type OnInit } from "@angular/core";

@Component({
	selector: "app-footer",
	templateUrl: "./footer.component.html",
	styleUrls: ["./footer.component.scss"],
})
export class FooterComponent implements OnInit {
	year: number;

	ngOnInit(): void {
		this.year = new Date().getFullYear();
	}
}
