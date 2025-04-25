Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (data = {
    firstName: 'Fernando',
    lastName: 'Ribas',
    email: 'teste@gmail.com',
    text: 'abcde'
}) => {
    cy.get('#firstName').type(data.firstName)
    cy.get('#lastName').type(data.lastName)
    cy.get('#email').type(data.email)
    cy.get('#open-text-area').type(data.text)
    cy.contains('button', 'Enviar').click()
})