import { expect } from "@playwright/test";
import { BasePage } from "./BasePage";


export class GetByRoleLocators extends BasePage {

    async navigateToUrl() {
        await this.goToUrl("playwrightpractice.html")
    }

    async clickOnButton() {
        await this.clickElement(this.page.getByRole('button', { name: 'Primary Action' }))
        await this.clickElement(this.page.getByRole('button', { name: 'Toggle Button' }))
    }

    async clickOnLinks() {
        await this.clickElement(this.page.getByRole('menuitem', { name: 'Home' }))
        await this.clickElement(this.page.getByRole('menuitem', { name: 'Products' }))
        await this.clickElement(this.page.getByRole('menuitem', { name: 'Contact' }))

    }

    async enterTextInInputField(username: string) {
        await this.fillInput('#username', username)

    }

    async clickOnCheckBox() {
        await this.clickElement(this.page.getByRole('checkbox', { name: 'Accept terms' }))

    }

    async verifyTextIngetByRole() {
        const verifyMessage1 = await this.getTextContent("div[role='alert']")
        expect(verifyMessage1).toContain('This is an important alert message!')

        const verifyMessage2 = await this.getTextContent("div[role='button']")
        expect(verifyMessage2).toContain('Div with button role')

    }

}