import {CheckoutPage} from "../pageObjects/checkoutPage";
import {LoginPage} from "../pageObjects/loginPage";
import {MainPage} from "../pageObjects/mainPage";
import {ProductPage} from "../pageObjects/productPage";
import {RegistrationPage} from "../pageObjects/registrationPage";

describe('Automation test cases for final task', () => {
    const email = 'Testing' + Math.floor((Math.random() * 100000)) + '@testing.com'
    const password = 'Qwerty123$%^'

    it('Create a new user', () => {
        cy.visit('https://lv.sportsdirect.com/')
        MainPage.checkSignInButtonVisibility()
        LoginPage.loginFormVisibility()
        RegistrationPage.clickRegisterButton()
        RegistrationPage.registrationFormVisibility()
        RegistrationPage.fillRegistrationForm(email, password)
        RegistrationPage.submitRegistrationForm()
        cy.get('#divAccount')
            .should('be.visible')
    })

    it.only('Logging in with a registered user', () => {
        cy.visit('https://lv.sportsdirect.com/')
        MainPage.checkSignInButtonVisibility()
        LoginPage.loginFormVisibility()
        LoginPage.fillLoginForm(email, password)
        LoginPage.clickLoginButton()
        LoginPage.checkAccountInformation()
    })

    it('"Please complete card details" error during checkout as a guest user', () => {
        cy.visit('https://lv.sportsdirect.com/basketball/basketball-shoes')
        ProductPage.checkIfProductsAreVisible()
        ProductPage.selectFirstProductFromList()
        ProductPage.selectSmallestItemSize()
        ProductPage.addItemToBag()
        CheckoutPage.clickCheckoutButton()
        CheckoutPage.filloutGuestEmailAndContinue()
        CheckoutPage.filloutDeliveryAddressFormAndContinue()
        CheckoutPage.selectStandardDeliveryAndContinue()
        CheckoutPage.selectCardAsPaymentOption()
        CheckoutPage.enterWrongCardDetails()
    })
})