/* eslint-disable no-undef */
describe("Check Location ", () => {
  // Check Frist Load
  it("Check integration Components And Data ", () => {
    cy.visit("http://localhost:3000/");
    cy.get("#detailsHeader").should("have.text", "Details");
    cy.get("#controlHeader").should("have.text", "Controls");
    cy.get("#overviewHeader").should("have.text", "Overview");
    cy.get(".flex-wrap > :nth-child(1)").should(
      "have.text",
      "Brianna ForbesDreamlurk The UnstoppableFoghammer Lead"
    );
    cy.wait(2000);
  });

  // Check Sort Desc
  it("Check Sort desc", () => {
    cy.get("#Desc").click();
    cy.get(".flex-wrap > :nth-child(1)").should(
      "have.text",
      "Hillary GibbsSpeedsoulShifting Rainshadow Iron"
    );
    cy.wait(2000);
  });

  // Check Sort Asc
  it("Check Sort Asc", () => {
    cy.get("#Asc").click();
    cy.get(".flex-wrap > :nth-child(1)").should(
      "have.text",
      "Brianna ForbesDreamlurk The UnstoppableFoghammer Lead"
    );
    cy.wait(2000);
  });

  // Click Data Overview
  it("Clcik Overview ", () => {
    cy.get(".flex-wrap > :nth-child(1)").click();
    cy.get(".space-y-2 > :nth-child(1)").should("have.text", "Brianna Forbes");
    cy.wait(2000);
  });

  // Submit Data
  it("Submit data", () => {
    cy.get(".py-2").click();
  });
});
