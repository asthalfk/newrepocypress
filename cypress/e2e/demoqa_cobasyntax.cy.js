
it('demoqa coba coba', function(){

    //it('Login Cura Positif case', function(){
    cy.visit('https://katalon-demo-cura.herokuapp.com/')
    //cy.get(Home_Page.Tittle_text).contains('CURA Healthcare Service').should('be.visible')
    

    //cy.get('[class="text-vertical-center"]').contains('CURA Healthcare Service').should('be.visible')
    cy.get('[id="btn-make-appointment"]').click()
    
    cy.get('[class="col-sm-12 text-center"]').contains('Login').should('be.visible')
    cy.get('[id="txt-username"]').should('be.visible').type('John Doe')
    cy.get('[id="txt-password"]').type('ThisIsNotAPassword')
    cy.get('[id="btn-login"]').click()
    cy.get('[class="col-sm-12 text-center"]').contains('Make Appointment')
    //cy.get('[id="chk_hospotal_readmission"]').should('be.uncheck')
    cy.get('[id="chk_hospotal_readmission"]').click().should('be.checked').and('have.value','Yes')

    //cy.get('[class="col-sm-4"]').click()
    cy.get('[id="combo_facility"]').should('have.value',"Tokyo CURA Healthcare Center").select("Hongkong CURA Healthcare Center")
    
    
    
    //cy.get('[class="lead text-danger"]').should('be.visible').contains('Login failed! Please ensure the username and password are valid.')
    
    // cy.get('[class="checkbox-inline"]').invoke('text').then((text)=>{
    // cy.log(`haha ${text}`)
    //     if(text.includes('Apply for hospital readmission')){
    //     cy.log('berhasil')
    
    // } 
    // else{cy.log('gagal')
    // }

    // cy.get('[id="chk_hospotal_readmission"]').click().should('be.checked')

})

