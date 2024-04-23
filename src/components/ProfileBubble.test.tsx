import { render, screen } from '@testing-library/react';
import ProfileBubble from './ProfileBubble';

test('renders name tag placeholder', () => {
    render(<ProfileBubble />);
    const nameTag = screen.getByText('Tucker');
    expect(nameTag).toBeTruthy();
});