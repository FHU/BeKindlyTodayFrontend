import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import Completion from './Completion';

describe('Completion component', () => {
    test('should render Completion component', () => {
        render(<BrowserRouter><Completion /></BrowserRouter>);
        expect(screen.getByText("Today's Challenge")).toBeTruthy();
    });

    test('should display character count', () => {
        render(<BrowserRouter><Completion /></BrowserRouter>);
        const textarea = screen.getByRole('textbox');
        fireEvent.change(textarea, { target: { value: 'Test text' } });
        const characterCount = screen.getByText('10 / 250');
        expect(characterCount).toBeTruthy();
    });

    test('should navigate to /confirmation on Complete button click', () => {
        render(<BrowserRouter><Completion /></BrowserRouter>);
        const completeButton = screen.getByText('Complete');
        fireEvent.click(completeButton);
        expect(window.location.href).toBe('/confirmation');
    });
});