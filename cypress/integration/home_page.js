beforeEach(() => {
  cy.intercept('POST', 'https://future-seeds-api.herokuapp.com/graphql', { fixture: 'user_profile.json'})
  cy.visit('http://localhost:3000/')
})


describe('Testing stubbing', () => {
 //  beforeEach(() => {
 //    cy.loadUser()
 // });

 it('should go to localhost', () => {
   // cy.loadUser()
    cy.url().should('eq', 'http://localhost:3000/')
  });

 it('Should confirm that true is equal to true', () => {
       expect(true).to.equal(true)
     });

 it('Should show the title', () => {
    cy.get('.home-container')
  });

 it('Should show the logo', () => {
    // cy.loadUser()
    cy.get('.small-logo')
  })

  it('Should be able to go to log-in page', () => {
    // cy.loadUser()
    cy.get('.log-in')
      .click()

   cy.get('select').select('Dolly-Parton-11').should('have.value', 11 )

   cy.get('.menu-btn-login').click()
  })

  // it('Should have drop-down populated by user names', () => {
  //   // cy.loadUser()
  //   cy.get('select').select('Dolly-Parton-11').should('have.value', 11 )
  // })
})
