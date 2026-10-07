describe('Login Tests', () => {

  it('should login with valid credentials', () => {

    cy.visit('https://www.saucedemo.com/')

    cy.get('[data-test="username"]')
      .type('problem_user')

    cy.get('[data-test="password"]')
      .type('secret_sauce')

    cy.get('[data-test="login-button"]')
      .click()

    cy.url()
      .should('include', '/inventory.html')

    cy.get('.title')
      .should('contain', 'Products')




      it('should display an error for invalid username', () => {

  cy.visit('https://www.saucedemo.com/')

  cy.get('[data-test="username"]')
    .type('wrong_user')

  cy.get('[data-test="password"]')
    .type('secret_sauce')

  cy.get('[data-test="login-button"]')
    .click()

  cy.get('[data-test="error"]')
    .should('be.visible')

})

  })
})



// invalid password, empty username ,empty password, both fields empty

