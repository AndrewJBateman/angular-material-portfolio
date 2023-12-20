import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Injectable, inject } from "@angular/core";
import { map } from "rxjs";

enum numberGridColumns {
	XSmall = 1,
	Small = 2,
	Medium = 3,
	Large = 4,
}

@Injectable({
	providedIn: "root",
})
export class BreakpointService {
	breakpointObserver = inject(BreakpointObserver);

	// return number of grid columns based on user screen size breakpoint, default 4
	BreakpointColumnNr$ = this.breakpointObserver
		.observe([Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Medium])
		.pipe(
			map(state => {
				return state.breakpoints[Breakpoints.XSmall]
					? numberGridColumns.XSmall
					: state.breakpoints[Breakpoints.Small]
						? numberGridColumns.Small
						: state.breakpoints[Breakpoints.Medium]
							? numberGridColumns.Medium
							: numberGridColumns.Large;
			})
		);
}
