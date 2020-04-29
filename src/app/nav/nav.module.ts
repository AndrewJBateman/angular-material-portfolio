import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TopNavbarComponent } from "./top-navbar/top-navbar.component";
import { SideNavbarComponent } from "./side-navbar/side-navbar.component";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from "@angular/flex-layout";
import { SharedModule } from "../shared/shared.module";
import { AppRoutingModule } from "../app-routing.module";
@NgModule({
  declarations: [TopNavbarComponent, SideNavbarComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    SharedModule,
    FlexLayoutModule,
  ],
  exports: [TopNavbarComponent, SideNavbarComponent],
})
export class NavModule {}
