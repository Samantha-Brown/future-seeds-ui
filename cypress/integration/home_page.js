describe('Testing stubbing', () => {
  beforeEach(() => {
    cy.loadUser()
 });

 it.skip('should go to localhost', () => {
    cy.url().should('eq', 'http://localhost:3000/')
  });

 it.skip('Should show the title', () => {
    cy.get('.home-container')
  });

 it.skip('Should show the logo', () => {
    cy.loadUser()
    cy.get('.small-logo')
  })
})