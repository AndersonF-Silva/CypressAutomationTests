class MainMenuComponent {
    constructor() {
        this.menuPaths = {
            'For her': '/demosite/women-s',
            'For him': '/demosite/men-s',
            'For all': '/demosite/for-all',
            'New products': '/demosite/catalog/products-new',
            'Featured products': '/demosite/catalog/featured-products',
            'All Products': '/demosite/catalog/all-products',
        }
    }

    getContainer() {
        return cy.get('.menu-content ul.level-1')
    }

    getMenuItem(menuName) {
        return this.getContainer().contains('a', menuName)
    }

    clickMenuItem(menuName) {
        this.getMenuItem(menuName).click()
    }

    getExpectedPath(menuName) {
        return this.menuPaths[menuName]
    }
}

module.exports = new MainMenuComponent()