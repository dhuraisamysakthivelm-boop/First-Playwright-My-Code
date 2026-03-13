import {test as Base } from "@playwright/test";
import { ManagePage } from "../pages/ManagePage";
import data from "../test-data/data.json";

type MyFixtures = {
    mp: ManagePage;
    user : {
            userName: string;
            email: string;
            password: string;
            age: string
        }  
    
};


export const test = Base.extend<MyFixtures>({
    mp: async ({ page }, use) => {
        const managePage = new ManagePage(page);        
        await use(managePage);
    },

    user: async ({ }, use) => {
        await use(data);
    }
})  