Cypress.Commands.add('loadApp', () => {
  cy.visit('http://localhost:3000')
})

//stubbing
Cypress.Commands.add('interceptAPI', (fixturePage, url) => {
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
    .interceptAPI('users', 'https://future-seeds-api.herokuapp.com/graphql')
})

Cypress.Commands.add('loadSeeds', () => {
  cy.visit('http://localhost:3000/seeds')
    .interceptAPI('https://future-seeds-api.herokuapp.com/graphql')
})

Cypress.Commands.add('chooseUser', () => {
  cy.loadUser()
  cy.wait(1000)
  cy.get('[href="/login"]')
    .click()
})
