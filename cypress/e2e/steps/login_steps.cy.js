import LoginPage from '../pages/login_pages'
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
const loginPage = new LoginPage

Given(/^que eu esteja na tela de Login$/, () => {
	loginPage.index()
});

When(/^eu preencher os dados de login na plataforma da Saucedemo$/, () => {
	loginPage.fillLogin('standard_user', 'secret_sauce')
});

When(/^clicar no botão login$/, () => {
	loginPage.loginEnter()
});

Then(/^terei feito o login com sucesso$/, () => {
	
});

//

Given(/^que eu queira fazer uma tentativa incorreta$/, () => {
	loginPage.index()
});

When(/^eu preencher incorretamente os dados da plataforma$/, () => {
	loginPage.fillLogin('standard', '1234')
});

When(/^clicar em logar$/, () => {
	loginPage.loginEnter()
});

Then(/^receberei um aviso de erro$/, () => {
	cy.contains('Epic sadface: Username and password do not match any user in this service')
});



