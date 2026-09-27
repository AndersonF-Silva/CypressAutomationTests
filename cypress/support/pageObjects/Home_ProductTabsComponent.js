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

    getTabLink(tabName) {
        return this.getContainer()
            .find('.tab-navigation .tab-a')
            .contains(tabName)
    }

    getTabListItem(tabName) {
        return this.getTabLink(tabName).parents('.tab-li')
    }

    clickTab(tabName) {
        this.getTabLink(tabName).click()
    }

    getContentBlock(tabName) {
        const blockId = this.tabContentIds[tabName]
        return cy.get(`#${blockId}`)
    }
}

module.exports = new ProductTabsComponent()