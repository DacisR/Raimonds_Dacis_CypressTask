export class LoginPage {
    static fillLoginForm(email, password) {
        cy.get('#Login_EmailAddress')
            .type(email)
        cy.get('#Login_Password')
            .type(password)
    }

    static clickLoginButton() {
        return cy.get('#LoginButton').click()
    }

    static loginFormVisibility() {
        return cy.get('#login').should('be.visible')
    }

    static checkAccountInformation() {
        cy.get('#divAccount')
            .should('be.visible')
            .click()
        cy.get('#accountHeader')
            .should('be.visible')
        cy.get('#accountHeader')
            .children()
            .children('h1')
            .should('have.text', 'Account Details')
    }
}