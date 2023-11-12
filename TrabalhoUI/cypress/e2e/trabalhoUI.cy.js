/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

describe ('Criando cenário de teste para o site Letterboxd ', () => {

  it.skip('Caso de teste: Fazendo login no site Letterboxd', () => {
    cy.visit('https://letterboxd.com')
    cy.get('.sign-in-menu > .navlink > .label').click()
    cy.get('#username').type('Allvez')
    cy.get('#password').type('gabriel123')
    cy.get('.button-container > .button').click()
  })

  it.skip('Caso de teste: Fazendo login no site Letterboxd (sem inserir senha)', () => {
    cy.visit('https://letterboxd.com')
    cy.get('.sign-in-menu > .navlink > .label').click()
    cy.get('#username').type('Allvez')
    cy.get('.button-container > .button').click()
    cy.get('#signin-message > p').should('have.text', 'Your credentials don’t match. It’s probably attributable to human error.')
  })

  it.skip('Caso de teste: Fazendo um review de um filme', () => {
    cy.visit('https://letterboxd.com')
    cy.get('.sign-in-menu > .navlink > .label').click()
    cy.get('#username').type('Allvez')
    cy.get('#password').type('gabriel123')
    cy.get('.button-container > .button').click()
    cy.get('#add-new-button').click()
    cy.get('#frm-film-name').type('The Godfather')
    cy.get('.ac_over').click()
    cy.get('#frm-review').type('Muito bom!')
    cy.get('#diary-entry-submit-button').click()
  })

  it.skip('Caso de teste: Conferindo se o review foi feito', () => {
    cy.visit('https://letterboxd.com')
    cy.get('.sign-in-menu > .navlink > .label').click()
    cy.get('#username').type('Allvez')
    cy.get('#password').type('gabriel123')
    cy.get('.button-container > .button').click()
    cy.visit('https://letterboxd.com/Allvez/')
    cy.get('.headline-2 > [href="/allvez/film/the-godfather/"]').should('contain', 'The Godfather')
  })

  it.skip('Caso de teste: Tentando comentário sem conteudo', () => {
    cy.visit('https://letterboxd.com/allvez/film/the-godfather/')
    cy.get('.sign-in-menu > .navlink > .label').click()
    cy.get('#username').type('Allvez')
    cy.get('#password').type('gabriel123')
    cy.get('.button-container > .button').click()
    cy.get('.-buttons > .button').click()
    cy.get('.jnotify-message > div').should('have.text', 'Please enter the comment.')
  })

  it('Caso de teste: Colocando um filme na "Watchlist"', () => {

    cy.visit('https://letterboxd.com/')
    cy.get('.sign-in-menu > .navlink > .label').click()
    cy.get('#username').type('Allvez')
    cy.get('#password').type('gabriel123')
    cy.get('.button-container > .button').click()
    cy.get('.-search > .replace').click()
    cy.get('#search-q').type('Monsters, INC.')
    cy.get('.action').click()
    cy.get('.film-title-wrapper > [href="/film/monsters-inc/"]').click()
    cy.get(':nth-child(4) > .action').click()
  })
})
