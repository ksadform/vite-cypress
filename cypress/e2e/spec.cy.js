import React from 'react';
import App from '../../src/App';

describe('template spec', () => {
    it('passes', () => {
        cy.mount(<App />);
        // cy.visit('https://example.cypress.io');
    });
});
