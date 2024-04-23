import { render, screen } from '@testing-library/react';
import Stats from './Stats';

/*IMPORTANT! The stats have to be greater than 0!*/

//Ensures there is a number displayed for global stats
test('displays correct global stats', () => {
    render(<Stats />);
    const globalStatValues = screen.getAllByText(/^[0-9]+[km]?$/);
    const globalStatUnits = screen.getAllByText(/^[km]$/i);
    expect(globalStatValues.length).toBeGreaterThan(0);
    expect(globalStatUnits.length).toBeGreaterThan(0);
  });

//Ensures there is a number displayed for global daily stats
test('displays correct global daily stats', () => {
    render(<Stats />);
    
    const globalDailyStatValues = screen.getAllByText(/^[0-9]+[km]?$/);
    const globalDailyStatUnits = screen.getAllByText(/^[km]$/i);    
    expect(globalDailyStatValues.length).toBeGreaterThan(0);
    expect(globalDailyStatUnits.length).toBeGreaterThan(0);
  });

//Ensures there is a number displayed for personal stats
test('displays correct personal stats', () => {
    render(<Stats />);
    const personalStatValues = screen.getAllByText(/^[0-9]+$/);
    const personalStatUnits = screen.getAllByText(/^[km]$/i);    
    expect(personalStatValues.length).toBeGreaterThan(0);
    expect(personalStatUnits.length).toBeGreaterThan(0);
  });