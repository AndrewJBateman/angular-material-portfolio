/**
 * PageNotFoundComponent displays a simple page when a route is not found.
 *
 * It imports Angular Material components for styling the card and button.
 *
 * The component is standalone and uses OnPush change detection.
 *
 * The template displays a card with a message and a button to navigate back.
 */
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { RouterLink } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";

@Component({
	selector: "app-page-not-found",
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: "./page-not-found.component.html",
	styleUrls: ["./page-not-found.component.scss"],
	standalone: true,
	imports: [MatCardModule, MatButtonModule, RouterLink],
})
export class PageNotFoundComponent {}
