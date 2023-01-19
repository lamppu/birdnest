import { render, screen } from '@testing-library/react';
import App from './App.js';
import EventSource from 'eventsourcemock';

Object.defineProperty(window, 'EventSource', {
  value: EventSource,
});

test('renders heading', () => {
  render(<App />);
  const heading = screen.getByText(/Birdnest/i);
  expect(heading).toBeInTheDocument();
});
