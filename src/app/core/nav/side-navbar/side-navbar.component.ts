import {
	Component,
	Output,
	EventEmitter,
	ChangeDetectionStrategy,
} from "@angular/core";
import { SvgCloseComponent } from "../../../shared/components/svg-close/svg-close.component";
import { SvgLinkedinComponent } from "../../../shared/components/svg-linkedin/svg-linkedin.component";
import { SvgGithubComponent } from "../../../shared/components/svg-github/svg-github.component";
import { NgClass } from "@angular/common";
import { RouterLinkActive, RouterLink } from "@angular/router";
import { MatDividerModule } from "@angular/material/divider";
import { MatListModule } from "@angular/material/list";

@Component({
	selector: "app-side-navbar",
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: "./side-navbar.component.html",
	styleUrls: ["./side-navbar.component.scss"],
	standalone: true,
	imports: [
		MatListModule,
		MatDividerModule,
		RouterLinkActive,
		RouterLink,
		NgClass,
		SvgGithubComponent,
		SvgLinkedinComponent,
		SvgCloseComponent,
	],
})
export class SideNavbarComponent {
	@Output() sidenavClose = new EventEmitter();

	public onSidenavClose = (): void => {
		this.sidenavClose.emit();
	};
}
