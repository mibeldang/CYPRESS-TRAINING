/// <reference types="cypress"/>

class Login{
    visit(){
        cy.viewport(1366,768)
        cy.visit('https://gearprotek.dnaqa.net/login?return_url=/portal/registration')
        cy.url().should('include','https://gearprotek.dnaqa.net/login?return_url=/portal/registration')
    }

    inputemail(value){
        const emailField = cy.get( '[id=email]')
        emailField.clear()
        emailField.type(value)
        return this
    }
    
    inputPassword(value){
        const passField = cy.get( '[id="password"]')
        passField.clear()
        passField.type(value)
        return this
    }

    submit(){
        const button = cy.get ('[type="submit"]')
        button.click()
    }

    emailErrormessage(){
        cy.get('#app-container > div > div > div > div.md-paper.md-paper--1.md-card.md-background--card.screenLogin__card > section > form > div > div:nth-child(1) > div.md-text-field-message-container.md-text-field-message-container--left-icon-offset.md-full-width.md-text--error > div')
            .should('be.visible').contains('Email is required')
    }

    passErrormessage(){
        cy.get('#app-container > div > div > div > div.md-paper.md-paper--1.md-card.md-background--card.screenLogin__card > section > form > div > div:nth-child(2) > div.md-text-field-message-container.md-text-field-message-container--left-icon-offset.md-text-field-message-container--right-icon-offset.md-full-width.md-text--error > div')
            .should('be.visible').contains('Password is required')
    }

    invalidemail(){
        cy.get('#app-container > div > div > div > div.md-paper.md-paper--1.md-card.md-background--card.screenLogin__card > section > form > div > div:nth-child(1) > div.md-text-field-message-container.md-text-field-message-container--left-icon-offset.md-full-width.md-text--error > div')
        .should('be.visible').contains('Email is invalid')       
    }
    existingEmail(){
        cy.get('[class="screenLogin__cardMessage  show"]').contains('Account does not exist')

    }

    incorrectPass(){
        cy.get('[class="screenLogin__cardMessage  show"]').contains('Incorrect password')      
    }

}
export default Login

