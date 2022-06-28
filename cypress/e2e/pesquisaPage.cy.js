describe("Test the search page", () => {
  it("Visit pesquisa page", () => {
    cy.visit("/pesquisa");
    cy.wait(3000);
  });

  it("View search form", () => {
    cy.get("#search_form").should("be.visible");
  });

  it("Type word in user input", () => {
    cy.get("#char_input").type("Rick");
  });

  it("Click fetch button", () => {
    cy.get("#fetch_button").click();
  });

  it("View result cards", () => {
    cy.wait(3000);
    cy.get(".card").each((el) => {
      expect(el).contain("Rick");
    });
  });
});
