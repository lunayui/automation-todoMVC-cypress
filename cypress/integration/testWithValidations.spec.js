/// <reference types = "cypress"/>

describe('Authentication Suite', function ()  {

    before(function(){
        cy.visit('http://the-internet.herokuapp.com/');
        cy.get(':nth-child(21) > a').click();

    } )
    
    it('Testing elements and asserts', function ()  {

        cy.get('#username').type('tomsmith');
        cy.get('#password').type('SuperSecretPassword!');
        cy.get('.fa').click();
  
        // Should be on a new URL which includes 
        cy.url().should('include', '/secure')
  
        // Get an input, type into it and verify that the value has been updated
        cy.get('.icon-2x')
          .should('contain', 'Logout')
    })
  })