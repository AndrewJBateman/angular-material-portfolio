import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
	name: 'dateConvert'
})
export class DateConvertPipe implements PipeTransform {

	transform(value: any): string {
		return moment(value).fromNow();
	}

}
