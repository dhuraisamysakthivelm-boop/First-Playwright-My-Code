import {Page} from "@playwright/test";
import { GetByRoleLocators } from "./GetByRoleLocators";
import { GetByTextLocators } from "./getByTextLocators";
import { GetByLabelLocators } from "./getByLabelLocators";


export class ManagePage {
    constructor(private page: Page) { }

    private getByRoleLoc ?: GetByRoleLocators;
    private getByTextLoc ?: GetByTextLocators;
    private getByLabelLoc ?: GetByLabelLocators;
    
    get getByRoleLocators(): GetByRoleLocators {
        if (!this.getByRoleLoc) {
            this.getByRoleLoc = new GetByRoleLocators(this.page);
        } 
        return this.getByRoleLoc;      
        
    }

    get getByTextLocators(): GetByTextLocators {
        if (!this.getByTextLoc) {
            this.getByTextLoc = new GetByTextLocators(this.page);
        }       
        return this.getByTextLoc;      
    }

    get getByLabelLocators(): GetByLabelLocators {
        if (!this.getByLabelLoc) {
            this.getByLabelLoc = new GetByLabelLocators(this.page);
        }
        return this.getByLabelLoc;
    }
}