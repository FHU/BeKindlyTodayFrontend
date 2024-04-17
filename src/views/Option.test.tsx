// Import necessary dependencies and render test utilities
import React from 'react';
import { render } from '@testing-library/react';
import Confirmation from './Confirmation';

// Describe the tests for the Confirmation component
describe('Confirmation Component', () => {
  // Test that the component renders without crashing
  it('should render without errors', () => {
    render(<Confirmation />);
  });

  // Test that the Navbar component is rendered
  it('should render Navbar component', () => {
    const { getByTestId } = render(<Confirmation />);
    expect(getByTestId('navbar')).toBeInTheDocument();
  });

  // Test that the Stats Section renders the correct number of stats
  it('should render three stats', () => {
    const { getAllByTestId } = render(<Confirmation />);
    const stats = getAllByTestId('stat');
    expect(stats.length).toBe(3);
  });

  // Test that the Timer Section renders with the correct time
  it('should render the timer with a specific time format', () => {
    const { getByText } = render(<Confirmation />);
    expect(getByText('04:43:07')).toBeInTheDocument();
  });

  // Test that the Card component is rendered
  it('should render the Card component', () => {
    const { getByTestId } = render(<Confirmation />);
    expect(getByTestId('card')).toBeInTheDocument();
  });
});
