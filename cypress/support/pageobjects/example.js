// <reference types="cypress" />

import cypress from 'cypress';
import testElements from '../elements/test'

const TestElements = new testElements;

class test{

    testFunction(){
        cy.get(TestElements.testElement()).click()
    }

}
export default test