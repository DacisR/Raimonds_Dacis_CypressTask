export class ProductPage {
    static selectFirstProductFromList() {
        return cy.get('#navlist').children().first().click()
    }

    static selectSmallestItemSize() {
        cy.get('#ulSizes')
            .should('be.visible')

        return cy.get('#liItem').first().click()
    }

    static addItemToBag() {
        return cy.get('#aAddToBag').click()
    }

    static checkIfProductsAreVisible() {
        return cy.get('#ProductContainer').should('be.visible')
    }
}