import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Homepage from "../pom/homepage";

When(/^I visit homepage$/, () => {
  cy.visit("/");
});

Then(/^I click on the custom btn$/, () => {
  Homepage.clickOnCustomBtn()
});

Then(/^I expect the icon is( not)* displayed$/, (falseCase) => {
  falseCase ? cy.get(Homepage.selectors.logo).should('not.exist') : cy.get(Homepage.selectors.logo).should('be.visible')
});