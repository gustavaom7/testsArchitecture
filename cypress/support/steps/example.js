// <reference types="cypress" />

import cypress from 'cypress';
import test from '../pageobjects/test'

const TestFunctions = new test;

And("test phrase", () => {
    TestFunctions.testFunction();
})
