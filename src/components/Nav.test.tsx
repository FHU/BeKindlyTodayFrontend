import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Nav';

test('renders navbar component', () => {
    render(
        <Router>
            <Navbar />
        </Router>
    );
    // Assert that the BeKindly text is rendered
    const textElement = screen.getByText('BeKindly');
    expect(textElement).toBeDefined();
});

test('renders logo image', () => {
    render(
        <Router>
            <Navbar />
        </Router>
    );
    // Assert that the logo image is rendered
    const logoImage = screen.getByAltText('logo');
    expect(logoImage).toBeDefined();
});

test('renders calendar link', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
    // Assert that the calendar link is rendered
    const calendarLink = screen.getByTestId('calendar-link');
    expect(calendarLink).toBeDefined();
  });
  
  test('renders profile link', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
    // Assert that the profile link is rendered
    const profileLink = screen.getByTestId('profile-link');
    expect(profileLink).toBeDefined();
  });