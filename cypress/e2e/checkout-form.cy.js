
describe('should complete checkout with valid information', () => {

  
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')

    cy.get('[data-test="username"]')
      .type('problem_user')

    cy.get('[data-test="password"]')
      .type('secret_sauce')

    cy.get('[data-test="login-button"]')
      .click()
  })




it('should complete checkout with valid information', () => {
  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
    .click()

  cy.get('.shopping_cart_link')
    .click()

  cy.get('[data-test="checkout"]')
    .click()

  cy.get('[data-test="firstName"]')
    .type('John')

  cy.get('[data-test="lastName"]')
    .type('Smith')

  cy.get('[data-test="postalCode"]')
    .type('HP1 1AA')

  cy.get('[data-test="continue"]')
    .click()

  cy.get('[data-test="finish"]')
    .click()

  cy.get('.complete-header')
    .should('contain', 'Thank you for your order')

})
})

