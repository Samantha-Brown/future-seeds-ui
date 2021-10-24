describe('Testing stubbing', () => {
  // beforeEach(() => {
  //   cy.loadSeeds()
  // });

  // it('should go to localhost', () => {
  //   cy.loadSeeds()
  //   cy.url().should('eq', 'http://localhost:3000/seeds');
  // });

  it('should choose user and load seeds', () => {
    cy.chooseUser()
  })
});