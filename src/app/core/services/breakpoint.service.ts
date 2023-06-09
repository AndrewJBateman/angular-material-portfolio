import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreakpointService {
  breakpointObserver = inject(BreakpointObserver);
  constructor() { }

  columns$ = this.breakpointObserver
    .observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
    ])
    .pipe(
      map((state) => {
        if (state.breakpoints[Breakpoints.XSmall]) return 1;
        if (state.breakpoints[Breakpoints.Small]) return 2;
        if (state.breakpoints[Breakpoints.Medium]) return 3;
        return 4;
      })
    );
}
