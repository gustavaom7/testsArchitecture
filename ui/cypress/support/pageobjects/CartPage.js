class cartPage {
    //Locators
    elements = {
        // Locators
        continueShoppingButton: () => cy.get('data-test="continue-shopping"'),
        checkoutButton: () => cy.get('data-test="checkout"'),
        shoppingCartButton: () => cy.get('[data-test="shopping-cart-link"]'),
        cartItemRow: () => cy.get('.cart_item'),
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
            .parents('.cart_item')    // Sobe para o elemento pai (a linha inteira)
            .find('button')           // Procura o botão dentro dessa linha
            .click()
    }

    checkItemNotVisible(itemName) {
        cy.contains('.inventory_item_name', itemName).should('not.exist')
    }


}

export default new cartPage();