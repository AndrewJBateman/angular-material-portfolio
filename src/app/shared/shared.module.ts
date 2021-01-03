import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";
import { RouterModule } from "@angular/router";

import { MaterialModule } from "../material.module";
import { PipesModule } from "../pipes/pipes.module";

@NgModule({
  exports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    RouterModule,
    PipesModule,
  ],
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
