describe('Testing stubbing', () => {
  beforeEach(() => {
    cy.loadUser();
  });

  it('should go to localhost', () => {
    cy.url().should('eq', 'http://localhost:3000/');
  });

  it('Should log in with a user', () => {
    cy.loadUser();
    cy.get('[href="/login"]').click();

    
  });
});
