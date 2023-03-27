import { render, screen } from '@testing-library/react';
import App from './App';
import NavBar from './Componentes/NavBar';

test('renders learn react link', () => {
  render(<NavBar />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
