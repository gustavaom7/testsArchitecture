class cartPage {
    //Locators
    elements = {
        // Locators
        continueShoppingButton: () => cy.get('[data-test="continue-shopping"]'),
        checkoutButton: () => cy.get('[data-test="checkout"]'),
        shoppingCartButton: () => cy.get('[data-test="shopping-cart-link"]'),
        cartItemRow: () => cy.get('.cart_item'),
        firstNameField: () => cy.get('[data-test="firstName"]'),
        lastNameField: () => cy.get('[data-test="lastName"]'),
        postalCodeField: () => cy.get('[data-test="postalCode"]'),
        continueButtonCheckout: () => cy.get('[data-test="continue"]'),
        finishCheckout: () => cy.get('[data-test="finish"]')
    }

    // Actions
    clickContinueShopping() {
        this.elements.continueShoppingButton().click()
    }

    clickCheckoutButton() {
        this.elements.checkoutButton().click()
    }

    openCart() {
        this.elements.shoppingCartButton().click()
    }

    checkItemInCart(itemName) {
        // Search for a text
        cy.get('[data-test="cart-list"]').should('contain', itemName)
    }

    removeFromCart(itemName) {
        // Remove item from cart
        this.elements.cartItemRow()
            .contains(itemName)
            .parents('.cart_item')    
            .find('button')           
            .click()
    }

    checkItemNotVisible(itemName) {
        cy.contains('.inventory_item_name', itemName).should('not.exist')
    }

    checkItemVisibleCheckoutScreen(itemName) {
        cy.contains('body', itemName).should('be.visible')
        cy.get('[data-test="checkout-info-container"]').should('contain')
    }

    checkoutButtonClick() {
        this.elements.checkoutButton().click()
    }

    continueButtonCheckout() {
        this.elements.continueButtonCheckout().click()
    }

    fillCheckoutFormCorrectly() {
        this.elements.firstNameField().type('Gustavo')
        this.elements.lastNameField().type('Mesquita')
        this.elements.postalCodeField().type('37191018')
    }

    clickFinishCheckout() {
        this.elements.finishCheckout().click()
    }

}

export default new cartPage();