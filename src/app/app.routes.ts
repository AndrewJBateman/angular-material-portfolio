import { Routes } from "@angular/router";
import { HomeComponent } from "./modules/home/home.component";

export const routes: Routes = [
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
		loadChildren: () =>
			import("./modules/projects/projects.routes").then(
				mod => mod.PROJECTS_ROUTES
			),
	},
	{
		path: "skills",
		loadChildren: () =>
			import("./modules/skills/skills.routes").then(mod => mod.SKILLS_ROUTES),
	},
	{
		path: "posts",
		loadChildren: () =>
			import("./modules/posts/posts.routes").then(mod => mod.POSTS_ROUTES),
	},
	{
		path: "contact",
		loadChildren: () =>
			import("./modules/contact/contact.routes").then(
				mod => mod.CONTACT_ROUTES
			),
	},
	{
		path: "web-tech",
		loadChildren: () =>
			import("./modules/web-tech/web-tech.routes").then(
				mod => mod.WEBTECH_ROUTES
			),
	},
	{
		path: "**",
		loadChildren: () =>
			import("./modules/pagenotfound/pagenotfound.routes").then(
				mod => mod.NOTFOUND_ROUTES
			),
	},
];
