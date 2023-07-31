import { Component, type OnInit } from "@angular/core";
import { RouterLink } from "@angular/router";
import { MatToolbarModule } from "@angular/material/toolbar";

@Component({
	selector: "app-footer",
	templateUrl: "./footer.component.html",
	styleUrls: ["./footer.component.scss"],
	standalone: true,
	imports: [MatToolbarModule, RouterLink],
})
export class FooterComponent implements OnInit {
	year: number;

	ngOnInit(): void {
		this.year = new Date().getFullYear();
	}
}
