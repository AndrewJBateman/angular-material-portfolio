/**
 * Footer component displays the footer content like copyright info.
 * Implements OnInit to get the current year on initialization.
 */
import { Component, type OnInit } from "@angular/core";
import { RouterLink } from "@angular/router";
import { MatToolbarModule } from "@angular/material/toolbar";
import { DatePipe } from "@angular/common";

@Component({
	selector: "app-footer",
	templateUrl: "./footer.component.html",
	styleUrls: ["./footer.component.scss"],
	standalone: true,
	imports: [MatToolbarModule, RouterLink],
	providers: [DatePipe],
})
export class FooterComponent implements OnInit {
	currentYear!: string;

	constructor(private datePipe: DatePipe) {}

	ngOnInit(): void {
		this.currentYear = this.getCurrentYear();
	}

	getCurrentYear(): string {
		return this.datePipe.transform(new Date(), "yyyy")!;
	}
}
