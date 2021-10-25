import { aliasQuery } from '../utils/graphql-test-utils';

describe('Home Spec', () => {
  beforeEach(() => {
    cy.intercept(
      'POST',
      'https://future-seeds-api.herokuapp.com/graphql',
      (req) => {
        aliasQuery(req, 'getUsers')
      }
    )
    cy.visit('http://localhost:3000/')
    cy.wait('@gqlgetUsersQuery').then((interception) => {
      expect(interception).to.be.an('object');
    });
  })

  it('Should confirm that true is equal to true', () => {
    expect(true).to.equal(true)
  });

  it('Should show the title', () => {
    cy.get('.home-container')
  });

  it('Should show the logo', () => {
    cy.get('.small-logo')
  })

   it('Should be able to go to log-in page', () => {
     cy.get('.log-in')
       .click()

     cy.get('select').select('Dolly-Parton-11').should('have.value', 11 )

     cy.get('.menu-btn-login').click()
   })
})
