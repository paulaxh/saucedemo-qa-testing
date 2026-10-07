
describe('should sort products from low to high price', () => {

 beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')

    cy.get('[data-test="username"]')
      .type('problem_user')

    cy.get('[data-test="password"]')
      .type('secret_sauce')

    cy.get('[data-test="login-button"]')
      .click()
  })

  
it('should sort products from low to high price', () => {
  cy.get('[data-test="product-sort-container"]')
    .select('lohi')

  cy.get('.inventory_item_price')
    .then(($prices) => {

      const prices = [...$prices].map((price) =>
        parseFloat(price.innerText.replace('$', ''))
      )

      const sortedPrices = [...prices].sort((a, b) => a - b)

      expect(prices).to.deep.equal(sortedPrices)

    })
  })
it('should sort products from high to low price', () => {

  cy.get('[data-test="product-sort-container"]')
    .select('hilo')

  cy.get('.inventory_item_price')
    .then(($prices) => {

      const prices = [...$prices].map((price) =>
        parseFloat(price.innerText.replace('$', ''))
      )

      const sortedPrices = [...prices].sort((a, b) => b - a)

      expect(prices).to.deep.equal(sortedPrices)

    })

})


    })

