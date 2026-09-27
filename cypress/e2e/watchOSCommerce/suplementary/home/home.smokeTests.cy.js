describe('Home page - WATCH oscommerce', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('deve carregar a página inicial com sucesso', () => {
        cy.get('body').should('be.visible')
    })

    it('deve exibir o logo da loja', () => {
        cy.get('img[alt="Watch"]')
            .should('be.visible')
            .and('have.attr', 'src')
            .and('include', 'watchlogo.png')
    })

    it('deve exibir os links do header', () => {
        cy.contains('Home page').should('be.visible')
        cy.contains('Contact Us').should('be.visible')
        cy.contains('My Account').should('be.visible')
        cy.contains('Shopping Cart').should('be.visible')
    })

    it('deve exibir o menu principal de categorias', () => {
        cy.contains('For her').should('be.visible')
        cy.contains('For him').should('be.visible')
        cy.contains('For all').should('be.visible')
        cy.contains('New products').should('be.visible')
        cy.contains('Featured products').should('be.visible')
        cy.contains('All Products').should('be.visible')
    })

    it('deve exibir o campo de busca', () => {
        cy.get('input[placeholder="Enter your keywords"]').should('be.visible')
    })
})