//visit page
Cypress.Commands.add('loadApp', () => {
  cy.visit('http://localhost:3000')
})

//stubbing fixtures
Cypress.Commands.add('interceptAPI', (url) => {
  cy.intercept(`${url}`, {
    fixture: `user_profile.json`
  })
})

Cypress.Commands.add('interceptSeedAPI', (url) => {
  cy.intercept(`${url}`, {
    fixture: `user_seeds.json`
  })
})

//endpoint
Cypress.Commands.add('loadUser', () => {
  cy.loadApp()
    .interceptAPI('https://future-seeds-api.herokuapp.com/graphql')
})

Cypress.Commands.add('loadSeeds', () => {
  cy.visit('http://localhost:3000/seeds')
    .interceptSeedAPI('https://future-seeds-api.herokuapp.com/graphql')
})