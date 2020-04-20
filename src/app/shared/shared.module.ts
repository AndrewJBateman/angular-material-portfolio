import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../material.module';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
	exports: [
		BrowserAnimationsModule,
		CommonModule,
		FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
		MaterialModule,
    RouterModule,
    PipesModule
	],
	declarations: [
  ]
})
export class SharedModule {
	static forRoot(): ModuleWithProviders<SharedModule> {
		return {
			ngModule: SharedModule,
			providers: []
		};
	}
}
