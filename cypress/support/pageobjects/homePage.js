class addToCart {
    // Locators
    elements = {
        // Add to Cart buttons
        addToCartBackpack: () => cy.get('[data-test="add-to-cart-sauce-labs-backpack"]'),
        addToCartBikeLight: () => cy.get('[data-test="add-to-cart-sauce-bike-light"]'),
        addToCartBoltTShirt: () => cy.get('[data-test="add-to-cart-sauce-bolt-t-shirt"]'),
        addToCartFleeceJacket: () => cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]'),
        addToCartOnesie: () => cy.get('[data-test="add-to-cart-sauce-labs-onesie"]'),
        addToCartTShirtRed: () => cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]'),
    
    }

    // Actions
    addBackpackToCart() {
        this.elements.addToCartBackpack().click()
    }

}

export default new addToCart();