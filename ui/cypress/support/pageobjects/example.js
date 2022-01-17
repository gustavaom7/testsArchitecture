/// <reference types="cypress" />


import testElements from '../elements/example'

const TestElements = new testElements;

class test{

    visitBaseUrl(){
        cy.visit('/')
    }

}
export default test