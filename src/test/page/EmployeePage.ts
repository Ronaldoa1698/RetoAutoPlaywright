import { expect, Page } from '@playwright/test';
import { PageElement } from "../resources/interfaces/iPageElement";
import * as employePageResources from "../resources/EmployeePageLocators.json";


function getResource(resourceName: string) {
    return employePageResources.webElements.find((element: PageElement) => element.elementName == resourceName) as PageElement
 };

export class EmployeePage {
    constructor(private page: Page) {}

    employeePageLocators = {
        pimTab: () => this.page.locator(getResource('pimTab').selectorValue),
        addEmployeeButton: () => this.page.locator(getResource('addBtn').selectorValue),
        firstNameField: () => this.page.locator(getResource('firstNameField').selectorValue),
        lastNameField: () => this.page.locator(getResource('lastNameField').selectorValue),
        employeeIdField: () => this.page.locator(getResource('employeeIdField').selectorValue),
        saveButton: () => this.page.locator(getResource('saveButton').selectorValue),
        employeeName: (name: string) => this.page.locator(`//h6[text()='${name}']`)
    };

    public async navigateToAddEmployee(): Promise<void> {
        await this.employeePageLocators.pimTab().click();
        await this.employeePageLocators.addEmployeeButton().click();
    }

    public async fillEmployeeDetails(firstName: string, lastName: string, employeeId: string): Promise<void> {
        await this.employeePageLocators.firstNameField().fill(firstName);
        await this.employeePageLocators.lastNameField().fill(lastName);
        await this.employeePageLocators.employeeIdField().fill(employeeId);
    }

    public async saveEmployee(): Promise<void> {
        await this.employeePageLocators.saveButton().click();
    }

    public async assertEmployeeCreated(firstName: string, lastName: string): Promise<void> {
        const fullName = `${firstName} ${lastName}`;
        await this.employeePageLocators.employeeName(fullName).waitFor({ state: 'visible', timeout: 5000 });
        await expect(this.employeePageLocators.employeeName(fullName)).toBeVisible();
    }
}