
describe('should add one product to the cart', () => {


  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')

    cy.get('[data-test="username"]')
      .type('problem_user')

    cy.get('[data-test="password"]')
      .type('secret_sauce')

    cy.get('[data-test="login-button"]')
      .click()
  })


  
it('should addone product to the cart', () => {
  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
    .click()

  cy.get('.shopping_cart_badge')
    .should('contain', '1')

  cy.get('[data-test="remove-sauce-labs-backpack"]')
    .should('be.visible')

})

it('should add multiple products to cart', () => {

  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
    .click()

  cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]')
    .click()

  cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]')
    .click()

  cy.get('.shopping_cart_badge')
    cy.get(".shopping_cart_badge").should('contain', '3')
  })

}) 
  
