import { aliasQuery } from '../utils/graphql-test-utils';

describe('Journal Spec', () => {

  beforeEach(() => {
    cy.intercept(
      'POST',
      'https://future-seeds-api.herokuapp.com/graphql',
      (req) => {
        aliasQuery(req, 'getSelectedUser')
      }
    )

    cy.visit('http://localhost:3000/journal')

    cy.wait('@gqlgetSelectedUserQuery').then((interception) => {
      expect(interception).to.be.an('object');
      });
    })

  it('Should go to Journals Page', () => {
    cy.url().should('eq', 'http://localhost:3000/journal')
  })

  it('Should have a nav bar', () => {
    cy.get('.top-home-bar')
      .should('have.text', 'SeedsJournalLog Out')
  })

  it('Should display user\'s journals', () => {
    cy.get('.journal-card')
      .should('have.length', 3)
  })

  it('Should display journal date', () => {
    cy.get(':nth-child(1) > h1')
      .should('have.text', '2021-12-31')
  })

  it('Should display journal description', () => {
    cy.get(':nth-child(1) > p')
      .should('have.text', 'Do. Or do not. There is no try.')
  })

  it('Should be able to click button and show new journal form', () => {
    cy.get('button')
      .click()
    cy.get('.journal-form-container')
      .should('be.visible')
  })
})
