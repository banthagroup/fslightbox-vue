export function getCypressAppChain(appName) {
    return cy.visit(Cypress.env('url'))
        .get(`#${appName}`)
        .click()
}