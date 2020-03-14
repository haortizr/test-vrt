describe('Ejecucion de pruebas Visual Regression', function(){
   it('Generar paleta', function(){
        cy.visit('https://haortizr.github.io/test-vrt/VRT_colorPallete/palette.html')
        cy.contains('Generar nueva paleta').click()
        cy.screenshot(Cypress.env("screen")+"1")
        cy.contains('Generar nueva paleta').click()
        cy.screenshot(Cypress.env("screen")+"2")
    })
})
 