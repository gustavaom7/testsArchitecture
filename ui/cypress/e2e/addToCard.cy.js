import LoginPage from '../support/pageobjects/LoginPage'
import addToCart from '../support/pageobjects/homePage'
import cartPage from '../support/pageobjects/CartPage'

describe('Shopping Cart Tests', () => {

    let credentials;

    before(() => {
        // Load data
        cy.fixture('loginData').then((data) => {
            credentials = data
        })
    })

    beforeEach(() => {
        // visit website
        LoginPage.visit()
        // login
        LoginPage.submitLogin(credentials.standardUser, credentials.password)
    })

    it('add Sauce Labs Backpack to the cart', () => {
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

    // next scenario: checkout 

})