
describe('Products Page', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')

    cy.get('[data-test="username"]')
      .type('problem_user')

    cy.get('[data-test="password"]')
      .type('secret_sauce')

    cy.get('[data-test="login-button"]')
      .click()
  })

  it('should display the products page', () => {

    cy.url()
      .should('include', '/inventory.html')

    cy.get('.inventory_item')
      .should('have.length.greaterThan', 0)

    cy.get('.title')
      .should('contain', 'Products')



      it('should display product images', () => {

  cy.get('.inventory_item img')
    .each(($img) => {

      cy.wrap($img)
        .should('be.visible')
        .and(($image) => {
          expect($image[0].naturalWidth)
            .to.be.greaterThan(0)
        })

    })

})

  })

})

