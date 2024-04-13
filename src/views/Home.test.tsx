import { render, screen } from '@testing-library/react';
import Home from './Home';

/**
 * Tests for the Home component.
 */
describe('Home component', () => {
    /**
     * Test case: should render Navbar component.
     */
    test('should render Navbar component', () => {
        render(<Home />);
        expect(screen.getByTestId('navbar-component')).toBeTruthy();
    });

    /**
     * Test case: should render stats section.
     */
    test('should render stats section', () => {
        render(<Home />);
        expect(screen.getByTestId('stats-section')).toBeTruthy();
    });

    /**
     * Test case: should render timer section.
     */
    test('should render timer section', () => {
        render(<Home />);
        expect(screen.getByTestId('timer-section')).toBeTruthy();
    });

    /**
     * Test case: should render Card component.
     */
    test('should render Card component', () => {
        render(<Home />);
        expect(screen.getByTestId('card-component')).toBeTruthy();
    });
});