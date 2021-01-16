import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { SkillsComponent } from "./skills.component";

const routes: Routes = [
  {
    path: "",
    component: SkillsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkillsRoutingModule {}
