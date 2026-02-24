// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//Check if an element is visile
Cypress.Commands.add('checkVisible', (selector) => {
    cy.get(selector).should('be.visible');
  });

//Check if an element is not visile
Cypress.Commands.add('checkNotVisible', (selector) => {
    cy.get(selector).should('not.be.visible');
});

//Login in via request for Saucedemo
Cypress.Commands.add('login', (username, password) => {
  cy.session([username, password], () => {
    cy.visit('/')
    cy.get('[data-test="username"]').type(username)
    cy.get('[data-test="password"]').type(password)
    cy.get('[data-test="login-button"]').click()
    cy.url().should('contain', '/inventory.html')
  }, 
  {
    validate() {
      // Check if session's cookie or Home element exist
      cy.get('.shopping_cart_link').should('be.visible')
    },
    cacheAcrossSpecs: true // share session across different test files
  })
})