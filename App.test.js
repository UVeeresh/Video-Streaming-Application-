import { render, screen } from '@testing-library/react';
import App from './App';
import App_Webtech from './index.js';

test('renders learn react link', () => {
  render(<App_Webtech></App_Webtech>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
