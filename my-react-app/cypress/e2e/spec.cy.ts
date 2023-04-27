import { port } from '../../server';

describe('My First Test', () => {
  it('Gets, types and asserts', () => {
    cy.visit(`/`);

    cy.contains('Forms').click();

    // Should be on a new URL which
    // includes '/commands/actions'
    cy.url().should('include', '/forms');

    // Get an input, type into it
    cy.get('.form__title--input').type('title');

    //  Verify that the value has been updated
    cy.get('.form__title--input').should('have.value', 'title');
  });
});
