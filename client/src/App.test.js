import { render, screen } from '@testing-library/react';
import App from './App.js';

test('renders heading', () => {
  render(<App />);
  const heading = screen.getByText(/Birdnest/i);
  expect(heading).toBeInTheDocument();
});
