import { aliasQuery } from '../utils/graphql-test-utils';

describe('Seed Spec', () => {

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

  it.skip('Should go to Seeds Page', () => {
    cy.url().should('eq', 'http://localhost:3000/seeds')
  })
  it.skip('Should have a nav bar', () => {
    cy.get('.top-home-bar')
      .should('have.text', 'SeedsJournalLog Out')
  })
  it.skip('Should display user\'s seed cards', () => {
    cy.get('.seed-card')
      .should('have.length', 3)
  })

  it.skip('Should display seed name', () => {
    cy.get('.seed-title')
      .first()
      .should('have.text', 'Pink carrot')
  })

  it.skip('Should display seed information', () => {
    cy.get(':nth-child(1) > .plant-info > .plant-text > :nth-child(1)')
      .should('have.text', 'Plant 1/8 in inches deep')
  })

  it.skip('Should be able to click button and show new seed form', () => {
    cy.get('button')
      .click()
    cy.get('.seed-form-container')
      .should('be.visible')
  })
})
