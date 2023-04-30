const selectors = {
    backBtn: 'button[data-testid="back-btn"]',
    bottomIcon: (iconName) => `div[data-testid="${iconName}Shirt-icons"]`,
    sideTab: (tabName) => `div[data-testid="${tabName}picker-tab"]`,
    sideWindow: (windowName) => `div[data-testid="${windowName}-picker"]`
}


class CustomPage {
    get selectors() {
        return selectors
    }

    clickOnBackBtn() {
        cy.get(this.selectors.backBtn).click()
    }

    clickOnBottomIcon(iconName) {
        cy.get(this.selectors.bottomIcon(iconName)).click()
    }

    clickOnSideTab(tabName) {
        cy.get(this.selectors.sideTab(tabName)).click()
    }

    chooseColor(color) {
        cy.get(this.selectors.sideWindow('color')).find(`div[title="${color}"]`).click()
    }

}

module.exports = new CustomPage()