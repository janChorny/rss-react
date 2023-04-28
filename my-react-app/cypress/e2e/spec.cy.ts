import '@cypress/code-coverage/support';

describe('My First Test', () => {
  it('Starts with main page', () => {
    cy.visit(`/`);
    cy.contains('Characters').click();
    cy.contains('About').click();
    cy.contains('Forms').click();
    cy.visit(`/hello`).contains('Not found page');
  });

  it('Checks Form page', () => {
    cy.visit(`/forms`);
    cy.contains('Forms').click();
    cy.url().should('include', '/forms');
    cy.get('.form__title--input').type('title');
    cy.get('.form__date--input').type('2010-10-10');
    cy.get('.form__country--select').select('USA');
    cy.get('[id=form__package]').click();
    cy.get('[id=form__cash-pay]').click();
    cy.get('.form__picture--input').selectFile('src/assets/react.svg');
    cy.get('.form__button').click();
    cy.get('.form-card');
  });
});
