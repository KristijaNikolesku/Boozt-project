
describe('Home Base tests', () => {
 

  it('Should redirect to .com', () => {
      cy.visit('www.boozt.dk',{ failOnStatusCode: false })
      cy.get('body').should('be.visible')
      cy.url().then((url) => {
      cy.url().should('include', 'boozt.com/')
      })
   })
 it('Should display a cookie banner', () => {
      cy.visit('/',{ failOnStatusCode: false })
      cy.get('body').should('be.visible')
      //Clear cookie 
       cy.url().then((url) => {
          })
      })
  it('Should open a cookie banner', () => {
      cy.visit('/',{ failOnStatusCode: false })
      cy.get('body').should('be.visible')
       cy.url().then((url) => {
          })
      })     

      // cy.get('[data-cy="submit"]').click()
   });
       


 

