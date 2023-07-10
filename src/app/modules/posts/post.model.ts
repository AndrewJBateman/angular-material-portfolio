export class Post {
	id: number = 0;
	category: "IT" | "Dev" | "Eng" | "Env";
	title: string = "";
	subtitle: string = "";
	content: string = "";
	image: string = "";
	published: {
		nanoseconds: number;
		seconds: number;
	};
}
