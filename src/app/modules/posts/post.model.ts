export class Post {
	id = 0;
	category: "IT" | "Dev" | "Eng" | "Env";
	title = "";
	subtitle = "";
	content = "";
	image = "";
	published: {
		nanoseconds: number;
		seconds: number;
	};
}
