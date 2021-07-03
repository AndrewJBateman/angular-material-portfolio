import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from "../../../../shared/shared.module";


import { PostDetailComponent } from './post-detail.component';
import { PostDetailRoutingModule } from './post-detail-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PostDetailRoutingModule,
    SharedModule,
  ],
  exports: [PostDetailComponent],
  declarations: [PostDetailComponent]
})

export class PostDetailModule { }
