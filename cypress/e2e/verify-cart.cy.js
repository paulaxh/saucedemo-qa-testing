
describe('verify cart', () => {

 beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')

    cy.get('[data-test="username"]')
      .type('problem_user')

    cy.get('[data-test="password"]')
      .type('secret_sauce')

    cy.get('[data-test="login-button"]')
      .click()
  })

  it('adds a product to cart and verifies the cart details', () => {

  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
    .click()

  cy.get('.shopping_cart_link')
    .click()

  cy.get('.inventory_item_name')
    .should('contain', 'Sauce Labs Backpack')

  cy.get('.inventory_item_price')
    .should('contain', '$29.99')

  })
})
