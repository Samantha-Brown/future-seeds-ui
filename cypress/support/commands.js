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

Cypress.Commands.add('interceptChosenUser', (url) => {
  cy.intercept(`${url}`, {
    fixture: `chosen_user_data.json`
  })
})

//endpoint
Cypress.Commands.add('loadUser', () => {
  cy.loadApp()
    .interceptAPI('https://future-seeds-api.herokuapp.com/graphql')
})

Cypress.Commands.add('loadSeeds', () => {
  cy.visit('http://localhost:3000/seeds')
    .interceptChosenUser('https://future-seeds-api.herokuapp.com/graphql')
})

Cypress.Commands.add('loadJournalEntries', () => {
  cy.visit('http://localhost:3000/journal')
    .interceptChosenUser('https://future-seeds-api.herokuapp.com/graphql')
})