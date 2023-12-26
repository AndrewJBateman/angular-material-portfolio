/**
 * PackageConvertPipe is a Pipe that transforms a package name
 * into its version by looking it up in the packageMap.
 *
 * The packageMap is a Map that contains package names mapped to their
 * versions loaded dynamically using require().
 *
 * The pipe is marked as standalone so it can be used outside of
 * Angular modules.
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Pipe, PipeTransform } from "@angular/core";
declare const require: (moduleName: string) => any;

const packageMap = new Map([
	["@angular/core/package.json", require("@angular/core/package.json").version],
	[
		"@angular/material/package.json",
		require("@angular/material/package.json").version,
	],
	["rxjs/package.json", require("rxjs/package.json").version],
	["typescript/package.json", require("typescript/package.json").version],
	["firebase/package.json", require("firebase/package.json").version],
	[
		"@angular/service-worker/package.json",
		require("@angular/service-worker/package.json").version,
	],
	["express/package.json", require("express/package.json").version],
	["eslint/package.json", require("eslint/package.json").version],
]);

@Pipe({
	name: "packageConvert",
	standalone: true,
})
export class PackageConvertPipe implements PipeTransform {
	transform(value: string): string {
		return packageMap.get(value) || "latest";
	}
}
