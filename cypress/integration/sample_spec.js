/// <reference types="Cypress" />

describe('My First Test inputall', () => {
  it('Gets, types and asserts', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('type').click()
    // Should be on a new URL which includes '/commands/actions'
    cy.url().should('include', '/commands/actions')
    // Get an input, type into it and verify that the value has been updated
    cy.get('.action-email')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com').screenshot()
    cy.percySnapshot()
  })
})

describe('Integration test with visual testing', function() {
  it('Loads the homepage', function() {
    // Load the page or perform any other interactions with the app.
    cy.visit('https://gorillalogic.com/')
    // Take a snapshot for visual diffing
    cy.percySnapshot()
  });
});

describe('Hello world', () => {
  it('works', () => {
    cy.visit('https://applitools.com/helloworld');

    //Start the test
    cy.eyesOpen({
      appName: 'Hello World!',
      testName: 'My first JavaScript test!',
      browser: { width: 800, height: 600 },
    });

    // Add checkpoint #1 (This is test step #1)
    cy.eyesCheckWindow('Main Page');

    cy.get('button').click();

    // Add checkpoint #2 (This is test step #2)
    cy.eyesCheckWindow('Click!');

    //End Test
    cy.eyesClose();
  });
});