describe('assertion demo test', () => {
  it('assertion testcase', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('root').click()
    
    cy.get('#query-btn')
    .should('contain', 'Button')
    .and('be.visible')
  
  
  
    ////tambah text baru 

  })
})