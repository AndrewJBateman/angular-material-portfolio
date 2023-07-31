import { Component, ChangeDetectionStrategy } from "@angular/core";
import { RouterLink } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";

@Component({
	selector: "app-pagenotfound",
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: "./pagenotfound.component.html",
	styleUrls: ["./pagenotfound.component.scss"],
	standalone: true,
	imports: [MatCardModule, MatButtonModule, RouterLink],
})
export class PageNotFoundComponent {}
