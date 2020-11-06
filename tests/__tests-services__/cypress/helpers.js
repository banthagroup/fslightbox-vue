export function getComponentChain(testComponent = 'BaseOpenedLightbox') {  // if no button id open base test lightbox
    return cy.visit(Cypress.env('url'))
        .get(`#${testComponent}`)
        .click()
}

/**
 *
 * @param {Object} style
 * @return {CSSStyleDeclaration}
 */
export function computeStyle(style) {
    const testElement = document.createElement('div');

    for (let name in style) {
        testElement.style[name] = style[name];
    }

    document.body.appendChild(testElement);

    return getComputedStyle(testElement);
}