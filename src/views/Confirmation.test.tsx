/**
 * @file This file contains the unit tests for the Confirmation component.
 */

import { render, screen } from '@testing-library/react';
import Confirmation from './Confirmation';

/**
 * Tests for the Confirmation component.
 */
describe('Confirmation component', () => {
    /**
     * Test case: should render the stats section.
     */
    test('should render the stats section', () => {
        render(<Confirmation />);
        expect(screen.queryByText('Challenges Completed Globally')).toBeTruthy();
        expect(screen.queryByText('Challenges Completed Today')).toBeTruthy();
        expect(screen.queryByText('Challenges Completed By You')).toBeTruthy();
    });

    /**
     * Test case: should render the timer section.
     */
    test('should render the timer section', () => {
        render(<Confirmation />);
        expect(screen.queryByText('04:43:07')).toBeTruthy();
    });

    /**
     * Test case: should render the card component.
     */
    test('should render the card component', () => {
        render(<Confirmation />);
        expect(screen.queryByText("Today's Challenge")).toBeTruthy();
    });
});