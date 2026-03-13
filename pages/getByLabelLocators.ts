import { expect } from "@playwright/test";
import { BasePage } from "./BasePage";


export class GetByLabelLocators extends BasePage {

    async navigateToUrl3() {
        await this.goToUrl("playwrightpractice.html")
    }

    async fillInputLabelElements(email: string, password: string, age: string) {
        await this.fillInput(this.page.getByLabel('Email Address:'), email)
        await this.fillInput(this.page.getByLabel('Password:'), password)
        await this.fillInput(this.page.getByLabel('Your Age:'), age)
    }

    async clickCheckBoxElement() {
        await this.clickElement(this.page.getByLabel(' Standard'))
        await this.clickElement(this.page.getByLabel(' Express'))
    }

}