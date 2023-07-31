import { NgModule, type ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatTabsModule } from "@angular/material/tabs";
import { RouterModule } from "@angular/router";

@NgModule({
	exports: [CommonModule, MatTabsModule, RouterModule],
	declarations: [],
})
export class SharedModule {
	static forRoot(): ModuleWithProviders<SharedModule> {
		return {
			ngModule: SharedModule,
			providers: [],
		};
	}
}
