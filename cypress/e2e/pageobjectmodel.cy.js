import { LoginPage } from "./page/login_page";


const loginPage = new LoginPage()


it('POM Demo', function(){

    cy.visit('https://opensource-demo.orangehrmlive.com')
    cy.get('.oxd-text--h5').should('contain','Login')
    loginPage.enterUsername()
    loginPage.enterPassword()
    loginPage.clickLoginButton() 

//cy.visit('https://opensource-demo.orangehrmlive.com')
//cy.get('.oxd-text--h5').should('contain','Login')
//cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
//cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
//cy.get('.oxd-button').click()

})