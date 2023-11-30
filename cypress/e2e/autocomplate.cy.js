
it('Autocomplate', function(){
cy.visit('https://docs.cypress.io/api/commands/hover')
cy.get('[id="Workarounds"]').trigger('mouseover')
cy.get('[class="hash-link"]').should('be.visible')

//class="hash-link"


//cy.visit('https://demoqa.com/tool-tips')
//cy.get('[d="toolTipButton"]').trigger('mouseover')

//cy.get('[class="text-vertical-center"]').contains('CURA Healthcare Service').should('be.visible')
// cy.get('[id="btn-make-appointment"]').click()

// cy.get('[class="col-sm-12 text-center"]').contains('Login').should('be.visible')
// cy.get('[id="txt-username"]').should('be.visible').type('John Doe')
// cy.get('[id="txt-password"]').type('ThisIsNotAPassword')
// cy.get('[id="btn-login"]').click()
// cy.get('[class="col-sm-12 text-center"]').contains('Make Appointment')


//cy.get('[class="lead text-danger"]').should('be.visible').contains('Login failed! Please ensure the username and password are valid.')



})
