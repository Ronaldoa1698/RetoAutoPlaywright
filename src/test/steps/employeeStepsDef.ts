import { Given, When, Then } from "@cucumber/cucumber";
import { pageFixture } from "../hooks/pageFixture";
import { EmployeePage } from "../page/EmployeePage";
import { Login } from "../page/LoginPage";

const employeePage = new EmployeePage(pageFixture.page);
const loginUserFunc = new Login(pageFixture.page);

Given('El admin está logueado en OrangeHRM', async function () {
    await loginUserFunc.loginUser("Admin", "admin123");
    await loginUserFunc.assertUserLogin();
});

Given('Hace clic en el menú PIM', async function () {
    await employeePage.navigateToPIM();
});

Given('Hace clic en el botón Add Employee', async function () {
    await employeePage.clickAddEmployee();
});

When('El usuario ingresa los detalles del nuevo empleado {string}, {string}, {string}', async function (string, string2, string3) {
    await employeePage.fillEmployeeDetails(string, string2, string3);
});

When('Hace clic en el botón Save', async function () {
    await employeePage.saveEmployee();
});

When('El nuevo empleado {string} {string} es creado exitosamente', async function (string, string2) {
    string = 'Ronaldo';
    string2 = 'Testing';
    await employeePage.assertEmployeeCreated(string, string2);
});

When('busca el empleado creado por el nombre {string}', async function (firstName: string) {
    await employeePage.searchEmployeeByName(firstName);
});

Then('El nuevo empleado {string} {string} es encontrado', async function (firstName: string, middleName: string) {
    await employeePage.assertEmployeeFound(firstName, middleName);
});
