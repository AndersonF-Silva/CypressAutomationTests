class ProductTabsComponent {
    constructor() {
        this.tabContentIds = {
            'New products': 'tab-block-112984-1',
            'Sales feature': 'tab-block-112984-2',
            'Featured products': 'tab-block-112984-3',
        }
    }

    getContainer() {
        return cy.get('[data-name="Tabs"]').first()
    }

    // O componente só responde a cliques depois que o main.js (lazy-load) executa.
    // Nesse momento ele esconde os blocos inativos com "height: 0px" inline.
    waitUntilReady() {
        this.getContainer()
            .find('.block[style*="height: 0px"]')
            .should('exist')
    }

    getTabLink(tabName) {
        return this.getContainer()
            .find('.tab-navigation .tab-a')
            .contains(tabName)
    }

    getTabListItem(tabName) {
        return this.getTabLink(tabName).parents('.tab-li')
    }

    clickTab(tabName) {
        this.waitUntilReady()
        this.getTabLink(tabName).click()
    }

    getContentBlock(tabName) {
        const blockId = this.tabContentIds[tabName]
        return cy.get(`#${blockId}`)
    }
}

module.exports = new ProductTabsComponent()