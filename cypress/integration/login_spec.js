import { aliasQuery } from '../utils/graphql-test-utils';

describe('Log in Spec', () => {
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

    cy.get('.log-in')
      .click()
  })

  it.skip('Should be able to go to log in page', () => {
    cy.url().should('eq', 'http://localhost:3000/login')
  })

  it.skip('Should have mocked data populated', () => {
    cy.get('select').select('Dolly-Parton-11').should('have.value', 11 )
  })

  it.skip('Should be able to log in and show user\'s data', () => {
    cy.get('select').select('Dolly-Parton-11').should('have.value', 11 )
    cy.get('.menu-btn-login').click()
    cy.url().should('eq', 'http://localhost:3000/seeds/')
  })

  it.skip('Should be able to return home from log-in', () => {
    cy.get('[href="/"]').click()
    cy.url().should('eq', 'http://localhost:3000/')
  })

  it.skip('Should be able to go to sign up from log-in', () => {
    cy.get('[href="/signup/"] > .new-user-prompt')
      .click()
    cy.url().should('eq', 'http://localhost:3000/signup/')
  })
})
