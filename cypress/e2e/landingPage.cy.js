describe("Test the landing page", () => {
  it("Visit landing page", () => {
    cy.visit("/");
    cy.wait(3000);
  });

  it("View the navigation bar", () => {
    cy.get("#header").should("be.visible");
  });

  it("View the hero image", () => {
    cy.get("#hero_image").should("be.visible");
  });

  it("View the heading text", () => {
    cy.get("#hero_heading").should("be.visible");
  });

  it("View the cta button", () => {
    cy.get("#hero_cta").should("be.visible");
  });

  it("Click cta button", () => {
    cy.get("#hero_cta").click();
    cy.wait(3000);
    cy.location("pathname").should("eq", "/pesquisa");
  });
});
