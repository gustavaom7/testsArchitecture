import LoginPage from '../support/pageobjects/LoginPage'

describe('SauceDemo Login Tests', () => {

    // Variable to store fixture data
    let credentials;

    // Load data once before tests run
    before(() => {
        cy.fixture('loginData').then((data) => {
            credentials = data
        })
    })
    
    beforeEach(() => {
        LoginPage.visit()
    })

    it('should login successfully with valid credentials', () => {
        LoginPage.submitLogin(credentials.standardUser, credentials.password)
        
        // Validation: Verify URL redirection
        cy.url().should('include', '/inventory.html')
    })

    it('should display error message for locked out user', () => {
        LoginPage.submitLogin(credentials.lockedOutUser, credentials.password)
        
        // Validation: Verify specific error text
        LoginPage.elements.errorMessage().should('contain', 'Sorry, this user has been locked out')
    })
})