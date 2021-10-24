describe('Testing stubbing', () => {
  beforeEach(() => {
    cy.loadUser()
 });

 it('should go to localhost', () => {
    cy.url().should('eq', 'http://localhost:3000/')
  });

 it('Should confirm that true is equal to true', () => {
       expect(true).to.equal(true)
     });

 it('Should show the title', () => {
    cy.get('.home-container')
  });

 it('Should show the logo', () => {
    cy.loadUser()
    cy.get('.small-logo')
  })
})
