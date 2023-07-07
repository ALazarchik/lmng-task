import {test} from "@playwright/test";
import {NavigationBar} from "../pageObjects/NavigationBar";
import {StartPage} from "../pageObjects/StartPage";
import {LoginPage} from "../pageObjects/LoginPage";
import {LOGIN_PAGE} from "../support/constants/textMessages";

const Chance = require("chance");
const chance = new Chance();

test('should error when logging in with non registered email and password', async ({page}) => {
    const nonExistingEmail = chance.email();
    const nonExistingPassword = chance.string();

    const startPage = new StartPage(page);
    await startPage.visit();

    const navigationBar = new NavigationBar(page);
    await navigationBar.openLoginPage();

    const loginPage = new LoginPage(page);
    await loginPage.submitLoginCredentials(nonExistingEmail, nonExistingPassword);
    await loginPage.checkLoginErrorMessageHasText(LOGIN_PAGE.LOGIN_ERROR_MESSAGE);
});
