import { NgModule } from "@angular/core";

import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  exports: [MatIconModule, MatCardModule],
})
export class MaterialModule {}
