import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebTechRoutingModule } from './web-tech-routing.module';
import { WebTechComponent } from './web-tech.component';
import { SharedModule } from "../../shared/shared.module";


@NgModule({
  declarations: [
    WebTechComponent
  ],
  imports: [
    CommonModule,
    WebTechRoutingModule,
    SharedModule,
  ],
  exports: [
    WebTechComponent
  ]
})
export default class WebTechModule { }
