export class RegistrationPage {
    static fillRegistrationForm(email, password) {
        cy.get('#Registration_FirstName')
            .type('Tester')
        cy.get('#Registration_LastName')
            .type('Testing')
        cy.get('#Registration_EmailAddress')
            .type(email)
        cy.get('#Registration_DateOfBirthDay')
            .select('1')
            .should('have.value', '1')
        cy.get('#Registration_DateOfBirthMonth')
            .select('1')
            .should('have.value', '1')
        cy.get('#Registration_DateOfBirthYear')
            .select('1990')
            .should('have.value', '1990')
        cy.get('#txtPassword')
            .type(password)
        cy.get('#Registration_ConfirmPassword')
            .type(password)
        cy.get('#Registration_IsSubscriber')
            .check()
    }

    static submitRegistrationForm() {
        return cy.get('#RegistrationSubmit').click()
    }

    static registrationFormVisibility() {
        return cy.get('#RegistrationForm').should('be.visible')
    }

    static clickRegisterButton() {
        return cy.get('[href="/registration?returnUrl=%2f"]').click()
    }
}