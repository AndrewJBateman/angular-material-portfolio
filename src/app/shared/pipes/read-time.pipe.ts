import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "readTime",
})
export class ReadTimePipe implements PipeTransform {
  transform(value: string): number {
    const wordsPerMinute = 200;
    const noOfWords = value.split(" ").length;
    const minutes = noOfWords / wordsPerMinute;
    return Math.ceil(minutes);
  }
}
