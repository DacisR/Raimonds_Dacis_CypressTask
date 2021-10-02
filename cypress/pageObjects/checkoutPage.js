export class CheckoutPage {
    static clickCheckoutButton() {
        cy.get('#divBagItems')
            .should('be.visible')
        cy.get('#aCheckout')
            .click()
    }

    static filloutGuestEmailAndContinue() {
        cy.get('#continue')
            .should('be.visible')
        cy.get('#Guest_EmailAddress')
            .type('Testing' + Math.floor((Math.random() * 100000)) + '@testing.com')
        cy.get('.dnnPrimaryAction')
            .eq(1)
            .should('have.text', 'Continue Securely')
            .click()
    }

    static filloutDeliveryAddressFormAndContinue() {
        cy.get('#SaveAddressForm')
            .should('be.visible')
        cy.get('#NewAddressSelection_Address_FirstName')
            .type('Tester')
        cy.get('#NewAddressSelection_Address_Surname')
            .type('Testing')
        cy.get('#NewAddressSelection_Address_Line1')
            .type('Random street')
        cy.get('#NewAddressSelection_Address_Town')
            .type('Random town', {force: true})
        cy.get('#NewAddressSelection_Address_Postcode')
            .type('LV1234')
        cy.get('#TelephoneNumber')
            .type('+37121234567', {force: true})
        cy.get('.AddressContainBut.NewAddressContainBut')
            .eq(2)
            .click()
    }

    static selectStandardDeliveryAndContinue() {
        cy.get('.Delivery')
            .children('h1')
            .should('have.text', 'Delivery Options')
        cy.get('.ContinueOn')
            .eq(2)
            .click({force: true})
    }

    static selectCardAsPaymentOption() {
        cy.get('#NewCardPaymentForm')
            .should('be.visible')
            .click()
    }

    static enterWrongCardDetails() {
        cy.get('.CardGroup')
            .children('h1')
            .should('have.text', 'Enter your Card Details')
        cy.get('#cardDetailsIncompleteError')
            .should('not.be.visible')
        cy.get('#cardSubmit')
            .click()
        cy.get('#cardDetailsIncompleteError')
            .should('be.visible')
            .and('have.text', 'Please complete the card details to continue.')
    }
}