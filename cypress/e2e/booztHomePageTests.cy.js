//import './e2e.js'


describe('Home Base tests', () => {
 

  it('Should redirect to .com', () => {
      cy.visit('www.boozt.dk',{ failOnStatusCode: false })
      cy.get('body').should('be.visible')
      cy.url().should('include', 'boozt.com/')
      
   });

 it('Should display a cookie banner', () => {
      cy.visit('/',{ failOnStatusCode: false })
      cy.get('body').should('be.visible')
      cy.clearAllCookies()
      cy.get('#onetrust-reject-all-handler').should('be.visible').click()
      
    })
});
   
       


 

