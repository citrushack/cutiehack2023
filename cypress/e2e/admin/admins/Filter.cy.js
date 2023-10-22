import response from "../../../fixtures/admins.json";

const admins = response.items;

describe("Admin Filters", () => {
  beforeEach(() => {
    cy.fetch({
      role: "admins",
      portal: "admin",
      page: "admins",
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

  it("Click Pending", () => {
    cy.get('[data-cy="pending-filter"]').click();
    admins.forEach((admin) => {
      if (admin.status === 0)
        cy.get(`[data-cy="${admin.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${admin.uid}"]`).should("exist");
    });
  });

  it("Click Rejected", () => {
    cy.get('[data-cy="reject-filter"]').click();
    admins.forEach((admin) => {
      if (admin.status === -1)
        cy.get(`[data-cy="${admin.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${admin.uid}"]`).should("exist");
    });
  });

  it("Click Accepted", () => {
    cy.get('[data-cy="accept-filter"]').click();
    admins.forEach((admin) => {
      if (admin.status === 1)
        cy.get(`[data-cy="${admin.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${admin.uid}"]`).should("exist");
    });
  });

  it("Click 2 Filters", () => {
    cy.get('[data-cy="accept-filter"]').click();
    cy.get('[data-cy="pending-filter"]').click();
    admins.forEach((admin) => {
      if (admin.status === 1 || admin.status === 0)
        cy.get(`[data-cy="${admin.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${admin.uid}"]`).should("exist");
    });
  });
});
