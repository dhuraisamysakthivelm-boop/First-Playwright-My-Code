import { expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class GetByTextLocators extends BasePage {

    async navigateToUrl1() {
        await this.goToUrl("playwrightpractice.html")
    }

    async extractTextFromElement() {
        const text1 = await this.getTextContent(this.page.getByText('important', { exact: true }))
        expect(text1).toContain('important')

        const text2 = await this.getTextContent(this.page.getByText('colored text'))
        expect(text2).toContain('colored text')

        const text3 = await this.getTextContent(this.page.getByText('List item 1'))
        expect(text3).toContain('List item 1')

        const text4 = await this.getTextContent(this.page.getByText('List item 2 with'))
        expect(text4).toContain('List item 2 with')    

        const text5 = await this.getTextContent(this.page.getByText('Special: Unique text identifier'))
        expect(text5).toContain('Special: Unique text identifier')

        const text6 = await this.getTextContent(this.page.getByText('Click the button above to submit your information.'))
        expect(text6).toContain('Click the button above to submit your information.')

    }

    async clickLinkElement() {
        await this.clickElement(this.page.locator("//a[text()='link']"))        
    }

    async clickButtonElement() {
        await this.clickElement(this.page.locator("//button[text()='Submit Form']"))
    }



}