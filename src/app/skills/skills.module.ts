import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SkillsRoutingModule } from "./skills-routing.module";
import { SkillsComponent } from "./skills.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [SkillsComponent],
  imports: [CommonModule, SkillsRoutingModule, SharedModule],
  exports: [SkillsComponent]
})
export class SkillsModule {}
