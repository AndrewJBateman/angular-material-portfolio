import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatTabsModule } from "@angular/material/tabs";
import { RouterModule } from "@angular/router";

import { MaterialModule } from "../material.module";

@NgModule({
  exports: [
    CommonModule,
    FlexLayoutModule,
    MatTabsModule,
    MaterialModule,
    RouterModule,
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
