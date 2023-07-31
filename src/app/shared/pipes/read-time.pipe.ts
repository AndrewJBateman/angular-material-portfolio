import { Pipe, type PipeTransform } from "@angular/core";

@Pipe({
	name: "readTime",
	standalone: true,
})
export class ReadTimePipe implements PipeTransform {
	transform(value: string): number {
		const wordsPerMinute = 200;
		const noOfWords = value.split(" ").length;
		const minutes = noOfWords / wordsPerMinute;
		return Math.ceil(minutes);
	}
}
