/// <reference types="Cypress" />

import LoginElements from '../elements/login_elements'

const loginElements = new LoginElements
const url = Cypress.config('baseUrl')

class LoginPage {

    index() {
        cy.visit(url)
    }

    fillLogin(username, password) {
        cy.get(loginElements.inputEmail()).type(username)
        cy.get(loginElements.inputPass()).type(password)
    }

    loginEnter() {
        cy.get(loginElements.buttonEnter()).click()
    }
}

export default LoginPage;