/* eslint-disable @typescript-eslint/no-explicit-any */
import { browser, by, element } from "protractor";

export class AppPage {
	async navigateTo() {
		return await (browser.get(browser.baseUrl) as Promise<any>);
	}

	async getTitleText() {
		return await (element(
			by.css("app-root .content span")
		).getText() as Promise<string>);
	}
}
