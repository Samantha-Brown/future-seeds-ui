import { aliasQuery } from '../utils/graphql-test-utils';

describe('Nav Bar Spec', () => {
  beforeEach(() => {
    cy.intercept(
      'POST',
      'https://future-seeds-api.herokuapp.com/graphql',
      (req) => {
        aliasQuery(req, 'getSelectedUser')
      }
    )

    cy.visit('http://localhost:3000/seeds')
    cy.wait('@gqlgetSelectedUserQuery').then((interception) => {
      expect(interception).to.be.an('object');
    });
  })

  it.skip('Should start at seeds page', () => {
    cy.url().should('eq', 'http://localhost:3000/seeds')
  })

  it.skip('Should have the nav bar visible', () => {
    cy.get('.top-home-bar')
      .should('be.visible')
  })

  it.skip('Should show log in and sign up on Nav bar', () => {
    cy.get('.links')
      .should('have.length', 3)
      .first()
      .should('have.text', 'Seeds')

    cy.get('.links')
      .last()
      .should('have.text', 'Log Out')
  })

  it.skip('Should be able to click journal link and go to journal page', () => {
    cy.get('.to-journal')
      .click()

    cy.url().should('eq', 'http://localhost:3000/journal')
  })

  it.skip('Should be able to go to seeds from journal page', () => {
    cy.get('.to-journal')
      .click()

    cy.get('.to-seeds')
      .click()

    cy.url().should('eq', 'http://localhost:3000/seeds')
  })

  it.skip('Should be able to log out from seeds page', () => {
    cy.get('.to-home')
      .click()

    cy.url().should('eq', 'http://localhost:3000/')
  })
})
