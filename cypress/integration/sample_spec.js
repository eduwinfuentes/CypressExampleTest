/// <reference types="Cypress" />

describe('My First Test', () => {
  it('Gets, types and asserts', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('type').click()
    // Should be on a new URL which includes '/commands/actions'
    cy.url().should('include', '/commands/actions')
    // Get an input, type into it and verify that the value has been updated
    cy.get('.action-email')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com')
  })
})

describe('Integration test with visual testing', function() {
  it('Loads the homepage', function() {
    // Load the page or perform any other interactions with the app.
    cy.visit('https://example.cypress.io')
    // Take a snapshot for visual diffing
    cy.percySnapshot();
  });
});