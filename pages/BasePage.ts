import { Page, Locator, expect } from '@playwright/test';


export abstract class BasePage {
    constructor(protected page: Page) {}

    // method that convert string selector to locator
    protected getLocator(selector: string | Locator): Locator {
        return typeof selector === 'string' // if the selector is a string, convert it to a locator
            ? this.page.locator(selector) // if the selector is a string, convert it to a locator
            : selector; // if the selector is already a locator, return it as is
    }

    // method to navigate to a specific URL
    protected async goToUrl(path: string) {
        await this.page.goto(path);
    }   

     // mathod to fill an input field
    protected async fillInput(selector: string | Locator, value: string) {
        const locator = this.getLocator(selector);
        await locator.fill(value); // fill the input field with the provided value
    }

    // method to click on an element
    protected async clickElement(selector:  string | Locator) {
        const locator = this.getLocator(selector);
        await locator.click();
    }

    // method to retrive text content from an element
    protected async getTextContent(selector: string | Locator): Promise<string> {
        const locator = this.getLocator(selector);
        return await locator.textContent() || ''; // return the text content of the element, or an empty string if it's null
    }

}