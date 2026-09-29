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

        // Texto esperado dentro do container de título (.box.w-catalog-title).
        // Por padrão, assumimos que o nome do menu aparece em algum lugar do
        // container (no page-name ou no h1) — funciona para 'For her', 'For him'
        // e 'For all'. As 3 páginas abaixo são exceções: o h1 delas usa um texto
        // fixo do template, sem relação com o nome do menu, então mapeamos
        // explicitamente o texto real esperado.
        this.titleOverrides = {
            'New products': 'latest products feature',
            'Featured products': 'selected best products module',
            'All Products': 'Full product range with filters module',
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

    getExpectedTitleText(menuName) {
        return this.titleOverrides[menuName] || menuName
    }

    getTitleContainer() {
        return cy.get('.box.w-catalog-title')
    }
}

module.exports = new MainMenuComponent()