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

    it('should show dropdown with stubbed data', () => {
      cy.loadUsers();
      cy.get('[href="/login"]').click();
      cy.get('.user-list');
      cy.contains('Dolly-Parton-11').select('Dolly-Parton-11');
    });
  });
});
