/// <reference types="cypress" />
beforeEach(() => {

  // App access
  cy.visit('https://agenda-contatos-react.vercel.app/')
})

describe('Contacts List', () => {
  it('Add new contact', () => {

    cy.get('input[type="text"]').type('Gian Souza');
    cy.get('input[type="email"]').type('gian@ebac.com.br');
    cy.get('input[type="tel"]').type('11912345678');

    // Submit the form
    cy.contains('Adicionar').click();

    // Verify if the contact was added
    cy.get('.contato:last li').should(($lis) => {
      expect($lis).to.have.length(3)
      expect(($lis).eq(0)).to.contain('Gian Souza')
      expect(($lis).eq(1)).to.contain('11912345678')
      expect(($lis).eq(2)).to.contain('gian@ebac.com.br')
    });
  });

  // Edit the contact
  it('Edit a contact', () => {    
    
    // Select the last Element
    cy.get('.contato').last().find('.edit').click();

    cy.get('input[type="text"]').clear().type('Gian Souza (updated)');
    cy.get('input[type="email"]').clear().type('gian.souza@ebac.com.br');
    cy.get('input[type="tel"]').clear().type('11999999999');
    
    // Form submit
    cy.contains('Salvar').click();

     // Verify if the contact was edited
     cy.get('.contato:last li').should(($lis) => {
      expect($lis).to.have.length(3)
      expect(($lis).eq(0)).to.contain('Gian Souza (updated)')
      expect(($lis).eq(1)).to.contain('11999999999')
      expect(($lis).eq(2)).to.contain('gian.souza@ebac.com.br')
    });
  });

  it('Delete a contact', () => {    
    // Select and delete the last Element
    cy.get('.contato:last').find('.delete').click();
  });
});
