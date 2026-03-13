import { expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class FunctionalElements extends BasePage {      
    async navigateToUrl3() {
        await this.goToUrl("playwrightpractice.html")
    }   

}