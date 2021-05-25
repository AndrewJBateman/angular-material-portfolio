import { Pipe, PipeTransform } from "@angular/core";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

@Pipe({
  name: "dateConvert",
})
export class DateConvertPipe implements PipeTransform {
  transform(value: any): string {
    return dayjs(value).fromNow();
  }
}
