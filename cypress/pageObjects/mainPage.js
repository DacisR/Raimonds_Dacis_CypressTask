export class MainPage {
    static checkSignInButtonVisibility() {
        return cy.get('#divSignIn').should('be.visible').click()
    }
}