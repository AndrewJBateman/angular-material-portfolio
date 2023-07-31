import { Pipe, PipeTransform } from "@angular/core";
declare const require: any;

@Pipe({
	name: "packageConvert",
	standalone: true,
})
export class PackageConvertPipe implements PipeTransform {
	transform(value: string): string {
		switch (value) {
			case "@angular/core/package.json":
				return require("@angular/core/package.json").version;
			case "@angular/material/package.json":
				return require("@angular/material/package.json").version;
			case "rxjs/package.json":
				return require("rxjs/package.json").version;
			case "typescript/package.json":
				return require("typescript/package.json").version;
			case "firebase/package.json":
				return require("firebase/package.json").version;
			case "@angular/service-worker/package.json":
				return require("@angular/service-worker/package.json").version;
			case "express/package.json":
				return require("express/package.json").version;
			default:
				return "latest";
		}
	}
}
