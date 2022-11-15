/// <reference types='cypress' />
// para que funcionen los comandos

//https://testingqarvn.com.es/

describe('Validando titulo', () =>{

    it('Test validar titulo', () =>{
        cy.visit('https://demoqa.com/text-box')
        cy.title().should('eq','ToolsQA')

        cy.log('La función title anda bien')
    })
})