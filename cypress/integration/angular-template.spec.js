describe('Angular Template E2E Test', function() {
  beforeEach(function () {
    cy.visit('/')
  });
  it('should find the Enter button on home page', function() {
    cy.contains('Enter');
  });
  it('should open dialog when the Enter button clicked', function() {
    cy.get('button').click();
    cy.get('#mat-dialog-0').should('be.visible');
  });
  it('should show feedback enter form only when the Enter button clicked', function() {
    cy.get('button').click();
    cy.get('#feedback-enter-form').should('be.visible');
    cy.get('#feedback-submit-form').should('not.exist');
    cy.get('#feedback').should('have.value', '');
  });
  it('should transition to submit form when done button on enter form clicked', function() {
    cy.get('button').click();
    cy.get('#feedback')
      .type('my feedback').should('have.value', 'my feedback');
    cy.get('#feedback-enter-button').click();
    cy.get('#feedback-submit-form').should('be.visible');
    cy.get('#feedback-enter-form').should('not.exist');
  });
  it('should display entered text on submit form', function() {
    cy.get('button').click();
    cy.get('#feedback')
      .type('my feedback').should('have.value', 'my feedback');
    cy.get('#feedback-enter-button').click();
    cy.get('#feedback-submit-form').contains('my feedback');
  });
  it('should return to enter form when Make Changes button clicked', function() {
    cy.get('button').click();
    cy.get('#feedback')
      .type('my feedback').should('have.value', 'my feedback');
    cy.get('#feedback-enter-button').click();
    cy.get('#feedback-edit-button').click();
    cy.get('#feedback-submit-form').should('not.exist');
    cy.get('#feedback-enter-form').should('be.visible');
    cy.get('#feedback').should('has.value', 'my feedback');
  });
  it('should dismiss the dialog and return to home page when Submit button clicked', function() {
    cy.get('button').click();
    cy.get('#feedback')
      .type('my feedback').should('have.value', 'my feedback');
    cy.get('#feedback-enter-button').click();
    cy.get('#feedback-submit-button').click();
    cy.get('#mat-dialog-0').should('be.visible');
    cy.contains('Enter');
  });
});
