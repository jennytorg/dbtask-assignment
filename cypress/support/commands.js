// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add("openAmazonSite",()=>{
    cy.visit('');
})

Cypress.Commands.add("ClickAddToCart",()=>{
    cy.get('#add-to-cart-button').click()
    cy.wait(3000)
       
})

Cypress.Commands.add("ClickToSeeMyCartList",()=>{
    cy.get('#nav-cart-count').click()
})

Cypress.Commands.add("checkIfConfirmMsgAppears",()=>{
        cy.get('#NATC_SMART_WAGON_CONF_MSG_SUCCESS').should('contain','Added to Cart')
    })