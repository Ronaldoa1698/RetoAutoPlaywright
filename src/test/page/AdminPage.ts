import { Page, expect } from "@playwright/test";
import * as adminPageLocators from "../resources/AdminPageLocators.json";
import { PageElement } from "../resources/interfaces/iPageElement";
import { pageFixture } from "../hooks/pageFixture";

function getResource(resourceName: string) {
    return adminPageLocators.webElements.find((element: PageElement) => element.elementName == resourceName) as PageElement
 };
export class AdminPage {

    adminPageLocators = {
        adminTab:() => pageFixture.page.locator(getResource('adminTab').selectorValue),
        addBtn:() => pageFixture.page.locator(getResource('addBtn').selectorValue),
        pimTab:() => pageFixture.page.locator(getResource('pimTab').selectorValue),
        userField:() => pageFixture.page.locator(getResource('userField').selectorValue),
        userAdminAssert:() => pageFixture.page.locator(getResource('userAdminAssert').selectorValue),
    };

    constructor(public page: Page){
        pageFixture.page = page;
    };

    public async goToAdminTab():Promise<void>{
        await this.adminPageLocators.adminTab().click(); 
    };

    public async goToPimTab():Promise<void>{
        await this.adminPageLocators.pimTab().click();
    }
};