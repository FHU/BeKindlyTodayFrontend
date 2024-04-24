import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('renders footer correctly', () => {
    render(<Footer />);
    
    // Assert that the footer element is rendered
    const footerElement = screen.getByRole('contentinfo');
    expect(footerElement).toBeTruthy();

    // Assert that the footer contains the expected text content
    expect(screen.getByText('2024 CIS467')).toBeTruthy();
    expect(screen.getByText('Terms')).toBeTruthy();
    expect(screen.getByText('Privacy')).toBeTruthy();
    expect(screen.getByText('About')).toBeTruthy();
});