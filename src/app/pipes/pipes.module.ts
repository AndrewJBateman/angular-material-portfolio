// module required so date pipe can be used by more than one page
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateConvertPipe } from './date-convert.pipe';
import { WordCountPipe } from './word-count.pipe';

@NgModule({
  imports: [CommonModule],
	declarations: [DateConvertPipe, WordCountPipe],
	exports: [DateConvertPipe, WordCountPipe]
})

export class PipesModule {}
