/// <reference types = "cypress"/>

describe('Testing TodoMVC app', function(){

    /*it('testing navigate to the TodoMVC app', function() {
        cy.visit('http://todomvc-app-for-testing.surge.sh/not-exist')
    });
*/
    it('testing add a new todo into the list', function() {
        cy.visit('http://todomvc-app-for-testing.surge.sh');
        //cy.get('.new-todo').type('New task into TODO{enter}');
        cy.get('.new-todo', {timeout: 6000}).type('Clean room{enter}')
        cy.get('label').should('have.text','Clean room');

        cy.get('.toggle').should('not.be.checked');

        cy.get('.toggle').click();
        cy.get('label').should('have.css', 'text-decoration-line', 'line-through')


        

        // cy.get('.toggle').click()

        // cy.contains('Clear completed').click();
    });
})
