import { test } from '../fixtures/pom.fixture';

test.describe('Get By Role Locators Test Suite', () => {
    test('Get By Role Locators Test Case', async ({ mp, user }) => {
        await mp.getByRoleLocators.navigateToUrl();
        await mp.getByRoleLocators.clickOnButton();
        await mp.getByRoleLocators.clickOnLinks();
        await mp.getByRoleLocators.enterTextInInputField(user.Field1);
        await mp.getByRoleLocators.clickOnCheckBox();
        await mp.getByRoleLocators.verifyTextIngetByRole();
    });

    test('Get By Text Locators Test Case', async ({ mp }) => {
        await mp.getByTextLocators.navigateToUrl1();
        await mp.getByTextLocators.extractTextFromElement();
        await mp.getByTextLocators.clickLinkElement();
        await mp.getByTextLocators.clickButtonElement();
    });

    test('Get By Label Locators Test Case', async ({ mp, user }) => {
        await mp.getByLabelLocators.navigateToUrl3();
        await mp.getByLabelLocators.fillInputLabelElements(user.Field2, user.Field3, user.Field4);
        await mp.getByLabelLocators.clickCheckBoxElement();
    });
});





