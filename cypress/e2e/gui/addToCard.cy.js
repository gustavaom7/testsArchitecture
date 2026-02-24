import LoginPage from '../../support/pageobjects/LoginPage'
import addToCart from '../../support/pageobjects/homePage'
import cartPage from '../../support/pageobjects/CartPage'

describe('Shopping Cart Tests', () => {

    let credentials;

    before(() => {
        // Load credentials data
        cy.fixture('gui_data').then((data) => {
            credentials = data
        })
    })

    beforeEach(() => {
        // Call cy.login function from '../support/commands.js'
        cy.login(credentials.standardUser, credentials.password)
        // Visit website
        cy.visit('/inventory.html', { failOnStatusCode: false })
    })

    it('add Sauce Labs Backpack to the cart', {tags:'@smoke'}, () => {
        // Add backpack to cart
        addToCart.addBackpackToCart()
        // Open cart
        cartPage.openCart()
        // Check if item is in the cart
        cartPage.checkItemInCart('Sauce Labs Backpack')
    })

    it('remove Source Labs Backpack from the cart', () => {
        // Add backpack to cart
        addToCart.addBackpackToCart()
        // Open cart
        cartPage.openCart()
        // Check if item is in the cart
        cartPage.checkItemInCart('Sauce Labs Backpack')
        // Remove item from the cart
        cartPage.removeFromCart('Sauce Labs Backpack')
        // Check if elemet was removed successfully
        cartPage.checkItemNotVisible('Sauce Labs Backpack')
    })

    it('checkout not filling any mandatory field', () => {
        // Add backpack to cart
        addToCart.addBackpackToCart()
        // Open cart
        cartPage.openCart()
        // Check if item is in the cart
        cartPage.checkItemInCart('Sauce Labs Backpack')
        // Click checkout button
        cartPage.checkoutButtonClick()
        // Click Continue button at checkout screen
        cartPage.continueButtonCheckout()
        // Check if error is visible
        cy.checkVisible('[data-test="error"]')
    })

    it('checkout successfully', () => {
        // Add backpack to cart
        addToCart.addBackpackToCart()
        // Open cart
        cartPage.openCart()
        // Check if item is in the cart
        cartPage.checkItemInCart('Sauce Labs Backpack')
        // Click checkout button
        cartPage.checkoutButtonClick()
        // Fill form correctly
        cartPage.fillCheckoutFormCorrectly()
        // Click Continue button at checkout screen
        cartPage.continueButtonCheckout()
        // Finish the operation
        cartPage.clickFinishCheckout()
        // Check confirmation message
        cy.checkVisible('[data-test="complete-header"]')

    })
})