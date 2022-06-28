describe("Test the search page", () => {
  it("Visit pesquisa page", () => {
    cy.visit("/favoritos");
    cy.wait(3000);
  });

  it("View heading message", () => {
    cy.get("#fav_message").should("be.visible");
  });
});
