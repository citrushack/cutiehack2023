import response from "../../../fixtures/judges.json";

const judges = response.items;

describe("Judges Filters", () => {
  beforeEach(() => {
    cy.fetch({
      role: "admins",
      portal: "admin",
      page: "judges",
    });
  });

  it("Default Filters", () => {
    cy.get('[data-cy="pending-filter"]').should(
      "have.class",
      "bg-white",
      "text-white"
    );
    cy.get('[data-cy="reject-filter"]').should(
      "have.class",
      "bg-white",
      "text-white"
    );
    cy.get('[data-cy="accept-filter"]').should(
      "have.class",
      "bg-white",
      "text-white"
    );
  });

  it("Click Filters", () => {
    cy.get('[data-cy="pending-filter"]').click();
    cy.get('[data-cy="pending-filter"]').should(
      "have.class",
      "text-white",
      "bg-white"
    );
    cy.get('[data-cy="reject-filter"]').click();
    cy.get('[data-cy="reject-filter"]').should(
      "have.class",
      "text-white",
      "bg-white"
    );
    cy.get('[data-cy="accept-filter"]').click();
    cy.get('[data-cy="accept-filter"]').should(
      "have.class",
      "text-white",
      "bg-white"
    );
  });

  it("Click Confirm", () => {
    cy.get('[data-cy="accept-filter"]').click();
    judges.forEach((judge) => {
      if (judge.status === 1)
        cy.get(`[data-cy="${judge.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${judge.uid}"]`).should("exist");
    });
  });

  it("Click Not Attending", () => {
    cy.get('[data-cy="reject-filter"]').click();
    judges.forEach((judge) => {
      if (judge.status === -1)
        cy.get(`[data-cy="${judge.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${judge.uid}"]`).should("exist");
    });
  });

  it("Click Pending", () => {
    cy.get('[data-cy="pending-filter"]').click();
    judges.forEach((judge) => {
      if (judge.status === 0)
        cy.get(`[data-cy="${judge.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${judge.uid}"]`).should("exist");
    });
  });

  it("Click 2 Filters", () => {
    cy.get('[data-cy="accept-filter"]').click();
    cy.get('[data-cy="reject-filter"]').click();
    judges.forEach((judge) => {
      if (judge.status === 1 || judge.status === -1)
        cy.get(`[data-cy="${judge.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${judge.uid}"]`).should("exist");
    });
  });
});
