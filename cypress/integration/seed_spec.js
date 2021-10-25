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
  it('Should go to Seeds Page', () => {

    expect(true).to.equal(true)
  })
})
