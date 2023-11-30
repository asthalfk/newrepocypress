

it('Upload file', function(){

    cy.visit('https://trytestingthis.netlify.app/')
    cy.get('#myfile').attachFile('example.json')



})