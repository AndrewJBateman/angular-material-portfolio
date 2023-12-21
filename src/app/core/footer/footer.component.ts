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
	currentYear: number;

	ngOnInit(): void {
		this.currentYear = this.getCurrentYear();
	}

	getCurrentYear() {
		return new Date().getFullYear();
	}
}
