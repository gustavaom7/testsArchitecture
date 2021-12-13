/// <reference types="cypress" />

import cypress from 'cypress';
import testElements from '../elements/example'

const TestElements = new testElements;

class test{

    testFunction(){
        cy.get(TestElements.testElement()).click()
    }

}
export default test