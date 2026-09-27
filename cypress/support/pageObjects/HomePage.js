class HomePage {
    visit() {
        cy.visit('/')
    }

    getLogo() {
        return cy.get('img[alt="Watch"]')
    }

    getSearchInput() {
        return cy.get('input[placeholder="Enter your keywords"]')
    }

    getLink(text) {
        return cy.contains(text)
    }

    getMenuItem(text) {
        return cy.contains(text)
    }
}

module.exports = new HomePage()