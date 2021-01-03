import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PageNotFoundRoutingModule } from "./pagenotfound-routing.module";
import { PageNotFoundComponent } from "./pagenotfound.component";
import { SharedModule } from "../shared/shared.module";
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [
    CommonModule,
    PageNotFoundRoutingModule,
    SharedModule,
    MatButtonModule,
    MatListModule,
  ],
  exports: [PageNotFoundComponent],
})
export class PageNotFoundModule {}
