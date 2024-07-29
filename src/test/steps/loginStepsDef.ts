import { Given, Then, When, setDefaultTimeout } from "@cucumber/cucumber"
import { pageFixture } from "../hooks/pageFixture";
import { Login } from "../page/LoginPage";

setDefaultTimeout(150000);
let loginUserFunc = new Login(pageFixture.page);

Given('El usuario se encuentra en la página de inicio de sesión', async function () {
    await pageFixture.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  });
  
  When('El usuario ingresa las credenciales {string} y {string}', async function (username: string, password: string) {
    await loginUserFunc.loginUser(username, password);
  });
  
  When('El usuario ingresa las credenciales incorrectas {string} y {string}', async function (username: string, password: string) {
    await loginUserFunc.doesNotLoginUser(username, password);
  });
  
  Then('El usuario inicia sesión correctamente', async function () {
    await loginUserFunc.assertUserLogin();
  });
  
  Then('El usuario no inicia sesión', async function () {
    await loginUserFunc.assertUserNotLoggedIn();
  });