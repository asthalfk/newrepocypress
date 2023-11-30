import { LoginPageSimple } from "./page/loginpagesimple";


const loginpage1 = new LoginPageSimple()

it('import Demo', function(){
    
    cy.visit('https://opensource-demo.orangehrmlive.com')
    cy.get('.oxd-text--h5').should('contain','Login')
    loginpage1.enterUsername('Admin')
    loginpage1.enterPassword('admin123')
    loginpage1.clickLoginButton() 
    cy.contains('Admin').click()
    cy.get('.oxd-topbar-header-breadcrumb-module').should('contain','Admin')
    cy.get('.oxd-topbar-header-breadcrumb-level').should('contain','User Management')
    //cy.get('.oxd-topbar-header-title').should('contain', 'Admin / User Management')


    })
