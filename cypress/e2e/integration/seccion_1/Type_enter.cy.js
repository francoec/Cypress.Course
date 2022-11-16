/// <reference types='cypress' />

describe('Funciones para Type', () => {

    it('Type con ENTER', () => {
      cy.visit('https://google.com')
      cy.title().should('eq','Google')
      cy.wait(1500)
    })
    
  })