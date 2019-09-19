import { PostListComponent } from './../posts/post-list/post-list.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import {
  MatCardModule,
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
  MatListModule,
  MatIconModule,
} from '@angular/material';

@NgModule({
  exports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    FlexLayoutModule
  ],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }
}
