import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Custompage from "../pom/custompage";


When(/^I click on back button$/, () => {
    Custompage.clickOnBackBtn()
});

When(/^I click on the "(.*)" bottom icon$/, (icon) => {
    Custompage.clickOnBottomIcon(icon)
});

Then(/^I click on the "(.*)" tab on side panel$/, (tab) => {
    Custompage.clickOnSideTab(tab)
});

Then(/^I select "(.*)" color on the color Picker$/, (color) => {
    Custompage.chooseColor(color)
});

Then(/^I expect that the color of Back button is "(.*)"$/, (color) => {
    cy.get(Custompage.selectors.backBtn).should('have.css', 'background-color', `${color}`)
});

Then(/^I visual check the t-shirt object with "(.*)"$/, (color) => {
    cy.compareSnapshot(color)
});