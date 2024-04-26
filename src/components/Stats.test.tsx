import { render, screen } from '@testing-library/react';
import Stats from './Stats';

// Ensures there is text displayed for global stats
test('displays correct global stats', () => {
  render(<Stats />);
  const globalStatValues = screen.getAllByText(/.+/);
  expect(globalStatValues.length).toBeGreaterThan(0);
});

// Ensures there is text displayed for global daily stats
test('displays correct global daily stats', () => {
  render(<Stats />);
  const globalDailyStatValues = screen.getAllByText(/.+/);
  expect(globalDailyStatValues.length).toBeGreaterThan(0);
});

// Ensures there is text displayed for personal stats
test('displays correct personal stats', () => {
  render(<Stats />);
  const personalStatValues = screen.getAllByText(/.+/);
  expect(personalStatValues.length).toBeGreaterThan(0);
});
