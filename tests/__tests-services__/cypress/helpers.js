export function getOpenedLightboxChain() {
    return cy.visit(Cypress.env('url'))
        .window()
        .get('#toggler')
        .click()
}
