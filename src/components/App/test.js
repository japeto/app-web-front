import { render, screen } from '@testing-library/react';
import App from '.';

test('Have title', () => {
  render(<App />);
  const linkElement = screen.getByText(/MISION TIC 2022/i);
  expect(linkElement).toBeInTheDocument();
});
