/* global Given, Then, When */

import test from '../pageobjects/example'

const TestFunctions = new test

And("access SwagLabs website", () => {
    TestFunctions.visitBaseUrl();
})
