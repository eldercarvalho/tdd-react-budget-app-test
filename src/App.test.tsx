import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {
  test('renders app name', () => {
    render(<App />);
  
    expect(screen.getByText('My Budget')).toBeInTheDocument();
  });
  
  test('should save a transaction', () => {
    render(<App />);

    userEvent.type(screen.getByPlaceholderText(/Ex: Salário, Mercado, Barzinho.../), 'Salário');
    userEvent.type(screen.getByPlaceholderText(/1000.00/), '2500.00');
    userEvent.click(screen.getByText(/Salvar/));

    expect(screen.getAllByRole('cell')[1]).toHaveTextContent('Salário');
    expect(screen.getAllByRole('cell')[2]).toHaveTextContent('2500.00');
  });
});