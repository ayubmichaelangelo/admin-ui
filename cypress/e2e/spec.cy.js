describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/')

    cy.get('[data-testid="form"]').should("exist")

    cy.get('input#email')
      .should('be.visible')
      .should('have.attr', 'placeholder', 'Enter your email')
      .type('ayub.michaelangelo@gmail.com').should('have.value', 'ayub.michaelangelo@gmail.com')

    cy.get('input#password')
      .should('be.visible')
      .should('have.attr', 'placeholder', 'password')
      .type('ayub123').should('have.value', 'ayub123')   

      cy.get('[data-testid="submit"]').click()

      cy.get('div.home')
          .should('be.visible')

          cy.get('div.sidebar')
          .should('be.visible') 
        
        cy.get('[data-testid="users"]').click()
        
        cy.url().should('include', '/users')
      
        cy.get('div.datatableTitle').contains('USERS')
  })
})