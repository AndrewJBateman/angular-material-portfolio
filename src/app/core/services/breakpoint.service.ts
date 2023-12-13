import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Injectable, inject } from "@angular/core";
import { map } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class BreakpointService {
	breakpointObserver = inject(BreakpointObserver);

	// return number of grid columns based on user screen size breakpoint, default 4
	columns$ = this.breakpointObserver
		.observe([Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Medium])
		.pipe(
			map(state => {
				return state.breakpoints[Breakpoints.XSmall]
					? 1
					: state.breakpoints[Breakpoints.Small]
						? 2
						: state.breakpoints[Breakpoints.Medium]
							? 3
							: 4;
			})
		);
}
