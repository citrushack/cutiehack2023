import response from "../../../fixtures/volunteers.json";

const volunteers = response.items;

describe("Volunteers Filters", () => {
  beforeEach(() => {
    cy.fetch({
      role: "admins",
      portal: "admin",
      page: "volunteers",
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
    volunteers.forEach((volunteer) => {
      if (volunteer.status === 1)
        cy.get(`[data-cy="${volunteer.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${volunteer.uid}"]`).should("exist");
    });
  });

  it("Click Not Attending", () => {
    cy.get('[data-cy="reject-filter"]').click();
    volunteers.forEach((volunteer) => {
      if (volunteer.status === -1)
        cy.get(`[data-cy="${volunteer.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${volunteer.uid}"]`).should("exist");
    });
  });

  it("Click Pending", () => {
    cy.get('[data-cy="pending-filter"]').click();
    volunteers.forEach((volunteer) => {
      if (volunteer.status === 0)
        cy.get(`[data-cy="${volunteer.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${volunteer.uid}"]`).should("exist");
    });
  });

  it("Click 2 Filters", () => {
    cy.get('[data-cy="accept-filter"]').click();
    cy.get('[data-cy="reject-filter"]').click();
    volunteers.forEach((volunteer) => {
      if (volunteer.status === 1 || volunteer.status === -1)
        cy.get(`[data-cy="${volunteer.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${volunteer.uid}"]`).should("exist");
    });
  });
});
