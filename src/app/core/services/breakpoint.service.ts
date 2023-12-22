import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Injectable, inject } from "@angular/core";
import {map, shareReplay } from "rxjs/operators";

/**
 * numberGridColumns enum provides a mapping of screen size breakpoints to number of grid columns.
 */
enum BreakpointSize {
	XSmall = 1,
	Small = 2,
	Medium = 3,
	Large = 4,
}

@Injectable({
	providedIn: "root",
})
/**
 * BreakpointService provides information about current viewport size breakpoints.
 * It uses Angular CDK BreakpointObserver to get breakpoint state, and maps it to
 * a number of grid columns to use for grid layouts.
 */
export class BreakpointService {
	breakpointObserver = inject(BreakpointObserver);

	// return number of grid columns based on user screen size breakpoint, default 4
	breakpointColumnNr$ = this.breakpointObserver
		.observe([Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Medium])
		.pipe(
			map(state =>
				state.breakpoints[Breakpoints.XSmall]
					? BreakpointSize.XSmall
					: state.breakpoints[Breakpoints.Small]
						? BreakpointSize.Small
						: state.breakpoints[Breakpoints.Medium]
							? BreakpointSize.Medium
							: BreakpointSize.Large
			),
      shareReplay(1)
		);
}
