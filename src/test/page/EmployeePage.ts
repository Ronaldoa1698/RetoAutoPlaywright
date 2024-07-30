import { expect, Page } from '@playwright/test';
import { PageElement } from "../resources/interfaces/iPageElement";
import { pageFixture } from "../hooks/pageFixture";
import * as employePageResources from "../resources/EmployeePageLocators.json";
import { AdminPage } from './AdminPage';

function getResource(resourceName: string) {
    return employePageResources.webElements.find((element: PageElement) => element.elementName == resourceName) as PageElement
 };

export class EmployeePage extends AdminPage {

    employeePageLocators = {
        pimTab: () =>  pageFixture.page.locator(getResource('pimTab').selectorValue),
        addEmployeeButton: () =>  pageFixture.page.locator(getResource('addEmployeeButton').selectorValue),
        firstNameField: () =>  pageFixture.page.locator(getResource('firstNameField').selectorValue),
        lastNameField: () =>  pageFixture.page.locator(getResource('lastNameField').selectorValue),
        middleNameField: () =>  pageFixture.page.locator(getResource('middleNameField').selectorValue),
        employeeIdField: () =>  pageFixture.page.locator(getResource('employeeIdField').selectorValue),
        saveButton: () =>  pageFixture.page.locator(getResource('saveButton').selectorValue),
        employeeName: (name: string) => pageFixture.page.locator(getResource('employeeName').selectorValue),
        navBarEmployeeList: () => pageFixture.page.locator(getResource('navBarEmployeeList').selectorValue),
        buttonSearch: () => pageFixture.page.locator(getResource('buttonSearch').selectorValue),
        inputEmployeeNameSearch: () => pageFixture.page.locator("//div[@class='oxd-autocomplete-wrapper']//input[@placeholder='Type for hints...']").first(),
        employeeNameInResults: (fullName: string) => pageFixture.page.locator(`//div[@class='oxd-table-body']//div[@role='row' and contains(., '${fullName}')]`).first()
    };

    public async navigateToPIM(): Promise<void> {
        await this.employeePageLocators.pimTab().waitFor({ state: 'visible', timeout: 30000 });
        await this.employeePageLocators.pimTab().click();
    }

    public async clickAddEmployee(): Promise<void> {
        await this.employeePageLocators.addEmployeeButton().waitFor({ state: 'visible', timeout: 30000 });
        await this.employeePageLocators.addEmployeeButton().click();
    }

    public async fillEmployeeDetails(firstName: string, middleName: string, lastName: string): Promise<void> {
        await this.employeePageLocators.firstNameField().waitFor({ state: 'visible', timeout: 30000 });
        await this.employeePageLocators.firstNameField().fill(firstName);
        await this.employeePageLocators.middleNameField().waitFor({ state: 'visible', timeout: 30000 });
        await this.employeePageLocators.middleNameField().fill(middleName);
        await this.employeePageLocators.lastNameField().waitFor({ state: 'visible', timeout: 30000 });
        await this.employeePageLocators.lastNameField().fill(lastName);
    }

    public async saveEmployee(): Promise<void> {
        await this.employeePageLocators.saveButton().waitFor({ state: 'visible', timeout: 30000 });
        await this.employeePageLocators.saveButton().click();
    }

    public async searchEmployeeByName(firstName: string): Promise<void> {
        await this.employeePageLocators.navBarEmployeeList().waitFor({ state: 'visible', timeout: 30000 });
        await this.employeePageLocators.navBarEmployeeList().click();
        await this.employeePageLocators.inputEmployeeNameSearch().waitFor({ state: 'visible', timeout: 30000 });
        await this.employeePageLocators.inputEmployeeNameSearch().fill(firstName);
        await this.employeePageLocators.buttonSearch().click();
    }

    public async assertEmployeeCreated(firstName: string, middleName: string): Promise<void> {
        const fullName = `${firstName} ${middleName}`;
        await this.employeePageLocators.employeeName(fullName).waitFor({ state: 'visible', timeout: 30000 });
        await expect(this.employeePageLocators.employeeName(fullName)).toBeVisible();
    }

    public async assertEmployeeFound(firstName: string, middleName: string): Promise<void> {
        const fullName = `${firstName} ${middleName}`;
        console.log(`Waiting for element with text: ${fullName} in search results`);
        const employeeInSearchResults = this.employeePageLocators.employeeNameInResults(fullName);
        await employeeInSearchResults.waitFor({ state: 'visible', timeout: 50000 });
        await expect(employeeInSearchResults).toBeVisible();
    }
}