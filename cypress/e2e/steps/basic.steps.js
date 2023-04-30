import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given(/^User is using "(mobile|desktop)"$/, (device) => {
    const screen = Cypress.env(device)
    cy.viewport(screen.weight, screen.height)
});

When(/^I wait "(.*)" sec$/, (time) => {
    cy.wait(time*1000);
});