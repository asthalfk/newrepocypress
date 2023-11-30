

it('multiple tab', function(){
    cy.visit('https://www.google.com/gmail/about/')
    cy.get('.footer__links > :nth-child(2) > :nth-child(4) > .link').click()
    
})

