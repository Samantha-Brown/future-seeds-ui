import { aliasQuery } from '../utils/graphql-test-utils';

describe('Nav Bar Spec', () => {
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
  it('Should true equal true', () => {
    expect('true').to.equal('true')
  })

  it('Should start at home page', () => {
    cy.url().should('eq', 'http://localhost:3000/')
  })

  it('Should show log in and sign up on Nav bar', () => {
    cy.get('.links')
      .should('have.length', 2)
      .first()
      .should('have.text', 'Log In')

    cy.get('.links')
      .last()
      .should('have.text', 'Sign Up')
  })

  it('Should be able to click Log in', () => {
    cy.get('.log-in')
      .click()

    cy.url().should('eq', 'http://localhost:3000/login')
  })

  it('Should be able click signup', () => {
    cy.get('.sign-up')
      .click()

  cy.url().should('eq', 'http://localhost:3000/signup')
  })

  // beforeEach(() => {
  //     cy.intercept(
  //       'POST',
  //       'https://future-seeds-api.herokuapp.com/graphql',
  //       (req) => {
  //         aliasQuery(req, 'getSelectedUser')
  //       }
  //     )
  //
  //   cy.visit('http://localhost:3000/seeds')
  //
  //   cy.wait('@gqlgetSelectedUserQuery').then((interception) => {
  //     expect(interception).to.be.an('object');
  //   });
  //
  //   })
  //
  //   it.skip('Should go to Seeds Page', () => {
  //     cy.url().should('eq', 'http://localhost:3000/seeds')
  //   })
})
