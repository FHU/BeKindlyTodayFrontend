import { render, screen } from '@testing-library/react';
import Timer from './Timer';

//This Tests to see if the Timer component is rendering correctly
test('displays correct time', () => {
    render(<Timer />);
    const timeElements = screen.getAllByText(/\d{2}/);    
    expect(timeElements.length).toBe(3);
});