/// <reference types="cypress"/>

import Login from "../../POM/Login";
import UserMenu from "../../POM/UserMenu";

describe('Gear Protek Test ', function(){
    const l = new Login()
    const um = new UserMenu()
    beforeEach(()=>{
        cy.wait(5000) 
        l.visit()
    })
   
    it ('Click login w/out inputting email and password',function(){
        l.submit()
        l.emailErrormessage()
        l.passErrormessage      
    })
    it('Input invalid email',function(){
        l.inputemail('scgbhnuryh')
        l.inputPassword('DNAR0cks!!')
        l.submit()
        l.invalidemail()   
    })
    it('Input incorrect password',function(){
        l.inputemail('qa@dnamicro.com')
        l.inputPassword('werg!!')
        l.submit()
        l.incorrectPass()
    })

    it('Input not existing email',function(){
        l.inputemail('la@dnamicro.com')
        l.inputPassword('DAR0cks!!')
        l.submit()
        l.existingEmail()
          
    })

    it('Login Successfully',function(){
        l.inputemail('shad@gmail.com')
        l.inputPassword('Sh@d143!!')
        l.submit()

    })

    it('Click save and close w/out inputting all fields',function(){
        l.inputemail('qa@dnamicro.com')
        l.inputPassword('DNAR0cks!!')
        l.submit()
        um.visit()
        um.userTab()
        um.usermodal()
        cy.wait(2000)
        um.saveandclose()
        um.emailErrormessage()
        um.fnameErrrormessage()
        um.lnameErrrormessage()
        um.roleErrormessage()
        um.passErrormessage()
    })
    
    it('Add new user w/ invalid email and password',function(){
        l.inputemail('qa@dnamicro.com')
        l.inputPassword('DNAR0cks!!')
        l.submit()
        um.visit()
        um.userTab()
        um.usermodal()
        um.inputemail('ewfeefedvd')
        um.inputfname('Devine')
        um.inputlname('Sanchez')
        um.selectRole('Admin')
        um.selectAffiliate()
        um.inputPassword('123')
        um.saveandclose()
        um.invalidEmail()
        um.invalidPass()
    })
    
    it('Add new user w/ existing email', function(){
        l.inputemail('qa@dnamicro.com')
        l.inputPassword('DNAR0cks!!')
        l.submit()
        um.visit()
        um.userTab()
        um.usermodal()
        um.inputemail('admin@gearprotek.com')
        um.inputfname('Claer')
        um.inputlname('Tan')
        um.selectRole('Partner')
        um.selectAffiliate()
        um.inputPassword('Devin3@!!')
        um.saveandclose()
        um.existemailError()

    })
    //       um.selectRole('Agent')
    //       um.selectRole('Affiliate')
    //       um.selectRole('Accountant')
    //       um.selectRole('Partner')

    it('Create new user',function(){
        l.inputemail('qa@dnamicro.com')
        l.inputPassword('DNAR0cks!!')
        l.submit()
        um.visit()
        um.userTab()
        um.usermodal()
       // um.inputemail('admin@gearprotek.com')
        um.inputemail('richjan@gmail.com') 
        um.inputfname('Shad')
        um.inputlname('Tan')
        um.selectRole('Admin')

        um.selectAffiliate()
        um.inputPassword('Sh@d143!!')
        um.saveandclose()
    })

      it('Retrieve created user',function(){
        l.inputemail('qa@dnamicro.com')
        l.inputPassword('DNAR0cks!!')
        l.submit()
        um.visit()
        um.userTab()
        um.retrieveUser()
        
    })

     it('Update User to Inactive', function(){
        l.inputemail('qa@dnamicro.com')
        l.inputPassword('DNAR0cks!!')
        l.submit()
        um.visit()
        um.userTab()
        um.updateUserToInactive()
    })

     it ('Update User from Inactive to Delete', function(){
        l.inputemail('qa@dnamicro.com')
        l.inputPassword('DNAR0cks!!')
        l.submit()
        um.visit()
        um.userTab()
        um.updateUserToDelete()
    })

    it ('Update USer from Deleted to Active', function(){
        l.inputemail('qa@dnamicro.com')
        l.inputPassword('DNAR0cks!!')
        l.submit()
        um.visit()
        um.userTab()
        um.updatedateUsertoActive()
    })
   
    it ('Delete User ', function(){
        l.inputemail('qa@dnamicro.com')
        l.inputPassword('DNAR0cks!!')
        l.submit()
        um.visit()
        um.userTab()
        um.deleteUser()
    })

   
})