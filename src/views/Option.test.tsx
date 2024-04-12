/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Option from './Option';

jest.useFakeTimers();

/**
 * Test suite for the Option component.
 */
describe('Option component', () => {
    /**
     * Test case to verify that the Option component is rendered.
     */
    test('should render Option component', () => {
        render(<Option />);
        expect(screen.getByTestId('option-component')).toBeTruthy();
    });

    /**
     * Test case to verify that the page navigates to /home after 3.2 seconds.
     */
    test('should navigate to /home after 3.2 seconds', async () => {
        render(<Option />);
        expect(screen.getByTestId('delayed-navigation').textContent).toBe('false');
        jest.advanceTimersByTime(3200);
        expect(screen.getByTestId('delayed-navigation').textContent).toBe('true');
        jest.advanceTimersByTime(100);
        expect(window.location.href).toBe('/home');
    });

    /**
     * Test case to verify that a Link component is rendered.
     */
    test('should render a Link component', () => {
        render(<Option />);
        expect(screen.getByTestId('link-component')).toBeTruthy();
    });

    /**
     * Test case to verify that a motion component is rendered.
     */
    test('should render a motion component', () => {
        render(<Option />);
        expect(screen.getByTestId('motion-component')).toBeTruthy();
    });
});
