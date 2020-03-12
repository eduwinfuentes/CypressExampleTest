describe('My First Test', function () {
  it('Does not do much!', function () {
    expect(true).to.equal(true)
  })
})
describe('My Second Test', function () {
  it('Does not do much!', function () {
    expect(true).to.equal(false)
  })
})
describe('My 3 Test', function () {
  it('Visits the Kitchen Sink', function () {
    cy.visit('https://example.cypress.io')
    cy.contains('nextUntil')
    cy.contains('get')
    cy.contains('contains').click()
    cy.contains('root')
  })
})
