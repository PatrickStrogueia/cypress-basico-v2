Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('Patrick')
    cy.get('#lastName').type('Strogueia')
    cy.get('#email').type('patrick@email.com')
    cy.get('#open-text-area').type('Teste')
    //cy.get('button[type="submit"]').click()
    cy.contains('button', 'Enviar').click()
})
