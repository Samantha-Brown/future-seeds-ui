Cypress.Commands.add('loadApp', () => {
  cy.visit('http://localhost:3000')
})

//stubbing
Cypress.Commands.add('interceptAPI', (fixturePage, url) => {
  cy.intercept(`${url}`, {
    fixture: `user_profile.json`
  })
})

//endpoint
Cypress.Commands.add('loadUser', () => {
  cy.loadApp()
    .interceptAPI('users', 'https://future-seeds-api.herokuapp.com/graphql')
})
