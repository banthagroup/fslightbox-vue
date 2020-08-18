import { getCypressAppChain } from "../__tests-services__/cypress/getCypressAppChain";

describe('mounting lightbox with loadOnlyCurrentSource set to false and then set it to true', () => {
    specify('should take loadOnlyCurrentSource that was set after mount and before first open', () => {
        getCypressAppChain('opening-lightbox-with-prop-changed-before-initialize')
            .get('#btn-set-up-load-only-current-source')
            .click()
            .get('#btn-open-lightbox')
            .click()
            .get('.fslightbox-source')
            .should('have.length', 1)
    });
});
