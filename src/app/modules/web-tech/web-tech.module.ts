import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebTechRoutingModule } from './web-tech-routing.module';
import { WebTechComponent } from './web-tech.component';
import { SharedModule } from "../../shared/shared.module";
import { FirestoreDataService } from 'src/app/core/services/firestore-data.service';
import { PackageConvertPipe } from './package-convert.pipe';


@NgModule({
  declarations: [
    WebTechComponent,
    PackageConvertPipe
  ],
  imports: [
    CommonModule,
    WebTechRoutingModule,
    SharedModule,
  ],
  exports: [
    WebTechComponent
  ],
  providers: [
    FirestoreDataService
  ]
})
export default class WebTechModule { }
