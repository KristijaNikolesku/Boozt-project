describe('Home Base tests', () => {

  beforeEach(() => {
    cy.openPageAndAcceptCookies();
  });

  it('Should have correct shipping to selected', () => {
    cy.url().should('include', 'com/dk/');
    cy.get('.typography').contains('Danmark').should('be.visible');
  });

  it('Should search for product', () => {
    cy.get('.global-search').click()
    cy.get('.skip-generic-styling').type("Sokk").type('{enter}');
    cy.get('div[data-actual-price*=" kr"] img').eq(2).should('be.visible').click();
    cy.get('body').should('be.visible');
  });

  it('Should add product to cart', () => {
    
    cy.visit('/mp/lydia-socks-3-pack_32668288/228165996')
    cy.get('.add-to-bag').click()
    cy.get('section.palette-modal-box-body button').eq(0).click()
    cy.get('div[role="dialog"] span').eq(2).click()
    cy.get('div.slide-panel h6').scrollIntoView().should('be.visible')

  });
});

