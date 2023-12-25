/**
 * DateConvertPipe is a pipe that converts a timestamp to a relative time string (e.g. "5 minutes ago").
 * It imports the dayjs library to handle the date manipulation.
 * The transform() method accepts a timestamp as a number or Date, converts it using dayjs().fromNow(),
 * and returns the relative time string. If no timestamp is passed in, it returns an empty string.
 */
import { Pipe, PipeTransform } from "@angular/core";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

@Pipe({
	name: "dateConvert",
	standalone: true,
})
export class DateConvertPipe implements PipeTransform {
	/**
 * Converts a timestamp to a relative time string (e.g. "5 minutes ago")
 */
  transform(timestamp: number | Date): string {
		return timestamp? dayjs(timestamp).fromNow() : '';
	}
}
