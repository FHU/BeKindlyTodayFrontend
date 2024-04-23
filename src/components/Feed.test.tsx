import { render, screen } from '@testing-library/react';
import Feed from './Feed';

test('renders user feed correctly', () => {
    render(<Feed />);
    
    // Assert that the user's name is rendered correctly
    const userNameElement = screen.getByText('Tucker.Brown');
    expect(userNameElement).toBeTruthy();
    
    // Assert that the user's profile picture is rendered correctly
    const profilePicElement = screen.getByAltText('Tailwind CSS chat bubble component');
    expect(profilePicElement.getAttribute('src')).toBe('https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg');
    
    // Assert that the kindness message is rendered correctly
    const kindnessElement = screen.getByText("Did not underestimate Kaylee's power today.");
    expect(kindnessElement).toBeTruthy();
});