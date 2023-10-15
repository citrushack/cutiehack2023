import response from "../../../fixtures/participants.json";

const participants = response.items;

describe("Participant Filters", () => {
  beforeEach(() => {
    cy.fetch({
      role: "admins",
      portal: "admins",
      page: "participants",
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
    participants.forEach((participant) => {
      if (participant.status === 0)
        cy.get(`[data-cy="${participant.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${participant.uid}"]`).should("exist");
    });
  });

  it("Click Rejected", () => {
    cy.get('[data-cy="reject-filter"]').click();
    participants.forEach((participant) => {
      if (participant.status === -1)
        cy.get(`[data-cy="${participant.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${participant.uid}"]`).should("exist");
    });
  });

  it("Click Accepted", () => {
    cy.get('[data-cy="accept-filter"]').click();
    participants.forEach((participant) => {
      if (participant.status === 1)
        cy.get(`[data-cy="${participant.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${participant.uid}"]`).should("exist");
    });
  });

  it("Click 2 Filters", () => {
    cy.get('[data-cy="accept-filter"]').click();
    cy.get('[data-cy="pending-filter"]').click();
    participants.forEach((participant) => {
      if (participant.status === 1 || participant.status === 0)
        cy.get(`[data-cy="${participant.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${participant.uid}"]`).should("exist");
    });
  });
});
