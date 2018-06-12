describe('Angular Template E2E Test', function() {
  beforeEach(function () {
    cy.visit('/')
  });
  it('should find the Enter button on home page', function() {
    cy.contains('Enter');
  })
});
