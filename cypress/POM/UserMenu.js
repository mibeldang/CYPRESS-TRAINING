/// <reference types="cypress"/>



class UserMenu{
    visit(){
        cy.url().should('include','https://gearprotek.dnaqa.net/portal/dashboard')
    }
    
    userTab(){
        const userLink = 'https://gearprotek.dnaqa.net/portal/user'
        const user = cy.get('[icon="users"]')
                    .should('be.visible').contains('Users')
        user.click({force:true})
        cy.url().should('include',userLink)
    }

    usermodal(){
        const newButton = cy.get('#main-content-demo > div.w_AdvancedFilter > div > div > div > div.md-paper.md-paper--1.md-card.md-background--card.md-cell.md-cell--12.pageTable__toolbar > header > button:nth-child(1)')
                            .should('be.visible')
        newButton.click()
    }
    inputemail(value){
        const emailField = cy.get( '[id=email]')
        emailField.clear()
        emailField.type(value)
        return this
    }
    inputfname(value){
        const fname = cy.get( '[id="first_name"]')
        fname.clear()
        fname.type(value)
        return this
    }
    inputlname(value){
        const lname = cy.get( '[id="last_name"]')
        lname.clear()
        lname.type(value)
        return this
    }
    selectRole(value){
        const clickRole = cy.get('#role-toggle > div.md-icon-separator.md-text-field.md-text-field--floating-margin.md-select-field--btn')
        clickRole.click()
        const r = cy.get('li').contains(value)
        r.click()
        return this
    }
    selectAffiliate(){
         cy.get('#react-select-2--value-item').should('be.visible').contains('GearProtek')
    }
      
    inputPassword(value){
        const passField = cy.get( '[id="password"]')
        passField.clear()
        passField.type(value)
        return this
    }

    saveandclose(){
        const button = cy.get ('#dialog > footer > button.md-btn.md-btn--flat.md-btn--text.md-pointer--hover.md-text--theme-primary.md-ink--primary.md-inline-block.md-btn--dialog.dialogAction__button--primary')
        button.click()
    }

    emailErrormessage(){
        cy.get('#dialog > section > div > div.md-text-field-container.md-full-width.md-text-field-container--input.md-cell.md-cell--10.dialog_content--textfield.input--large.md-dialog-content__header-text > div > div')
            .should('be.visible').contains('Email is required')
    }

    fnameErrrormessage(){
        cy.get('#dialog > section > div > div.md-cell.md-cell--12.display_flex.no_margin > div:nth-child(1) > div.md-text-field-message-container.md-text-field-message-container--left-icon-offset.md-full-width.md-text--error > div')
            .should('be.visible').contains('First Name is required')
    }

    lnameErrrormessage(){
        cy.get('#dialog > section > div > div.md-cell.md-cell--12.display_flex.no_margin > div:nth-child(2) > div.md-text-field-message-container.md-text-field-message-container--left-icon-offset.md-full-width.md-text--error > div')
            .should('be.visible').contains('Last Name is required')
    }
    roleErrormessage(){
        cy.get('#role-menu > div > div.md-text-field-message-container.md-full-width.md-text--error > div')
            .should('be.visible').contains('Role is required')
    }

    passErrormessage(){
        cy.get('#dialog > section > div > div.md-text-field-container.md-full-width.md-text-field-container--input.md-cell.md-cell--12.md-cell--stretch.dialog_content--textfield.no_margin > div.md-text-field-message-container.md-text-field-message-container--left-icon-offset.md-text-field-message-container--right-icon-offset.md-full-width.md-text--error > div')
            .should('be.visible').contains('Password is required')
    }
    invalidEmail(){
        cy.get('#dialog > section > div > div.md-text-field-container.md-full-width.md-text-field-container--input.md-cell.md-cell--10.dialog_content--textfield.input--large.md-dialog-content__header-text > div > div')
            .contains('Email is invalid')
    }
    invalidPass(){
        cy.get('#dialog > section > div > div.md-text-field-container.md-full-width.md-text-field-container--input.md-cell.md-cell--12.md-cell--stretch.dialog_content--textfield.no_margin > div.md-text-field-message-container.md-text-field-message-container--left-icon-offset.md-text-field-message-container--right-icon-offset.md-full-width.md-text--error > div')
        .contains('Must be at least 6 characters, and contain 1 Numeric and 1 Uppercase')
    }
    existemailError(){
        cy.get('[class="md-snackbar--toast md-snackbar--action"]').should('be.visible').contains('Email already in use.')
    }

//Retrieving created user in grid
    retrieveUser(){
        cy.wait(5000)
        cy.get('#main-content-demo > div.w_AdvancedFilter > div > div > div > div.md-paper.md-paper--1.md-card.md-background--card.md-cell.md-cell--12.pageTable__table > div.md-cell.md-cell--12 > div.pageTable_datatable > div > div.md-data-table--responsive.dna_datatable > table').find('tr')
            .each((row, el)=>{
                var element = row.text()
                var email = 'shad@gmail.com'
                cy.log(element)
                if(element.includes(email)){
                    cy.get(row).should('be.visible').contains(email).click()
                    cy.log(row)
                }
            })  
    }
    deleteUser(){
        cy.wait(5000)
        cy.get('#main-content-demo > div.w_AdvancedFilter > div > div > div > div.md-paper.md-paper--1.md-card.md-background--card.md-cell.md-cell--12.pageTable__table > div.md-cell.md-cell--12 > div.pageTable_datatable > div > div.md-data-table--responsive.dna_datatable > table').find('tr')
        .each((row, el)=>{
            var element = row.text()
            var email = 'shad@gmail.com'
            if(element.includes(email)){
                cy.get(row).should('be.visible').contains(email).click()
                cy.get('#fullPage__dialog > div > div.treeViewer__grid > div.treeViewer__grid--content > div > div.md-paper.md-paper--1.md-card.md-background--card.md-cell.md-cell--12.pageTable__toolbar > header')
                    .within(()=>{
                        cy.get('span').should('be.visible').contains('Delete').click({force:true})  
                    })
                cy.get('#remove-dialog').should('be.visible').find('div').contains('Delete Confirmation')
                cy.get('#remove-dialog > footer > button.md-btn.md-btn--flat.md-btn--text.md-pointer--hover.md-text--theme-primary.md-ink--primary.md-inline-block.md-btn--dialog.button-bg--primary.false > div > span')
                    .should('be.visible').click({force:true})
                cy.get('#snackbar-alert-dialog').should('be.visible')
               
            }
        })  
    }

//Updating user from active to inactive
    updateUserToInactive(){
        this.retrieveUser()
        cy.get('#status-toggle > div.md-icon-separator.md-text-field.md-select-field--btn > span')
            .click()
        cy.get('div[class="md-tile-text--primary md-text"]')
            .should('be.visible')
            .contains('Deleted')
        cy.get('div[class="md-tile-text--primary md-text"]')
            .should('be.visible')
            .contains('Inactive')
            .click()
        cy.get('span[class="md-icon-text"]')
            .should('be.visible')
            .contains('Save')
            .click()
        cy.wait(5000)
    
    }

    //Updating User from inactive to active

    updateUserToDelete(){
        this.retrieveUser()
        cy.get('#status-toggle > div.md-icon-separator.md-text-field.md-select-field--btn > span')
            .click()
        cy.get('div[class="md-tile-text--primary md-text"]')
            .should('be.visible')
            .contains('Active')
        cy.get('div[class="md-tile-text--primary md-text"]')
            .should('be.visible')
            .contains('Deleted')
            .click()  
            cy.get('span[class="md-icon-text"]')
            .should('be.visible')
            .contains('Save')
            .click()
        cy.wait(5000)
    }
//Updating User from Delete to Active

    updatedateUsertoActive(){
        this.retrieveUser()
        cy.get('#status-toggle > div.md-icon-separator.md-text-field.md-select-field--btn > span')
            .click()
        cy.get('div[class="md-tile-text--primary md-text"]')
            .should('be.visible')
            .contains('Inactive')
        cy.get('div[class="md-tile-text--primary md-text"]')
            .should('be.visible')
            .contains('Active')
            .click()  
            cy.get('span[class="md-icon-text"]')
            .should('be.visible')
            .contains('Save')
            .click()
        cy.wait(5000)
    }

  


}


export default UserMenu
