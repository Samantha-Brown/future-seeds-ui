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

  it.skip('Should start at home page', () => {
    cy.url().should('eq', 'http://localhost:3000/')
  })

  it.skip('Should show the title', () => {
    cy.get('.home-container')
  });

  it.skip('Should show the logo', () => {
    cy.get('.small-logo')
  })

  it.skip('Should show log in and sign up on Nav bar', () => {
    cy.get('.links')
      .should('have.length', 2)
      .first()
      .should('have.text', 'Log In')

    cy.get('.links')
      .last()
      .should('have.text', 'Sign Up')
  })

   it.skip('Should be able to go to log-in page', () => {
     cy.get('.log-in')
       .click()

    cy.url().should('eq', 'http://localhost:3000/login')
   })

  it.skip('Should be able click signup', () => {
     cy.get('.sign-up')
       .click()

   cy.url().should('eq', 'http://localhost:3000/signup')
   })
})
