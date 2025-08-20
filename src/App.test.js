import { render, screen } from '@testing-library/react';
import App from './App';
import App2 from './App2';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('Check the title of grocery component', () => {
  render(<App2 />);
  const onClickMock = jest.fn();

});