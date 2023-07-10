import { NgModule } from "@angular/core";
import { type Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./modules/home/home.component";

const routes: Routes = [
	{
		path: "",
		redirectTo: "/home",
		pathMatch: "full",
	},
	{
		path: "home",
		component: HomeComponent,
	},
	{
		path: "projects",
		loadChildren: async () =>
			await import("./modules/projects/projects.module"),
	},
	{
		path: "skills",
		loadChildren: async () => await import("./modules/skills/skills.module"),
	},
	{
		path: "posts",
		loadChildren: async () => await import("./modules/posts/posts.module"),
	},
	{
		path: "contact",
		loadChildren: async () => await import("./modules/contact/contact.module"),
	},
	{
		path: "web-tech",
		loadChildren: async () =>
			await import("./modules/web-tech/web-tech.module"),
	},
	{
		path: "**",
		loadChildren: async () =>
			await import("./modules/pagenotfound/pagenotfound.module"),
	},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {
			// initialNavigation: "enabledBlocking",
		}),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
