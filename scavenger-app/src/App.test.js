import { render, screen } from '@testing-library/react';
import ScavengerApp from './ScavengerApp';

test('renders learn react link', () => {
  render(<ScavengerApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
