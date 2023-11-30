

it('dropdown clicked', function(){

    cy.visit('https://trytestingthis.netlify.app/')
    cy.get('#option')
    .select('Option 1')
    .invoke('val')
    

    //radio button
    cy.get('#female').check()

    //checkbox
    cy.get('[name="option1"]').check()
    cy.get('[name="option2"]').check()
    cy.get('[name="option2"]').uncheck()



   // cy.get('#day').click();
    //recurse(
        //()=> 
        
        //cy.get('#day').invoke('text'),
        
        //cy.get("ui.datepicker-month").invoke('text'),
        //(n) => {
            //if(!n.includes("February")) {

                //cy.get("").click();
                //return false;
            //}

            //cy.contains(" a" , 24).click();
            //return true;
            
        //},
        //{limit : 12,}

    //);



    //slider
    const currentValue  = 50;
    const targetValue = 55;
    const increment = 1;
    const steps = (targetValue - currentValue) / increment;
    const arrows = '{rightarrow}'.repeat(steps); 
  
    cy.get('#a')
      .should('have.attr', 'aria-valuenow', 50)
      .type(arrows)
  
    cy.get('#a')
      .should('have.attr', 'aria-valuenow', 55)

      //cy.get('#a')

    //const currentValue  = 20000;
    //const targetValue = 35000;
    //const increment = 500;
    //const steps = (targetValue - currentValue) / increment;
    //const arrows = '{rightarrow}'.repeat(steps); 

        //cy.get('.rc-slider-handle')
            //.should('have.attr', 'aria-valuenow', 20000)
            //.type(arrows)

  //cy.get('.rc-slider-handle')
    //.should('have.attr', 'aria-valuenow', 35000)
    
    

})