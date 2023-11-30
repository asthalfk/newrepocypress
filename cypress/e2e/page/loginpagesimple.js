export class LoginPageSimple {

    enterUsername(username){
        
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(username)
    }

    enterPassword(password){

        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(password)

    }

    clickLoginButton(){

        cy.get('.oxd-button').click()

    }


}