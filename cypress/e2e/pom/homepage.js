const selectors = {
    logo: 'img[alt="logo"]',
    button: 'button[data-testid="custom-btn"]'
}


class Homepage {
    get selectors() {
        return selectors
    }

    clickOnCustomBtn() {
        cy.get(selectors.button).click()
    }

}

module.exports = new Homepage()