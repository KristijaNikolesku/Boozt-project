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
Cypress.Commands.add('openPageAndAcceptCookies', () => {
    cy.viewport(1920, 1080)
     cy.visit('www.boozt.dk',{ failOnStatusCode: false });
      cy.get('body').should('be.visible');
      cy.url().should('include', 'boozt.com/dk/da');
      cy.get('#onetrust-policy-text').should('be.visible');
      cy.get('#onetrust-policy-text').click() //.scrollTo('bottom');
      cy.get('#onetrust-accept-btn-handler').click();
   
     
});
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