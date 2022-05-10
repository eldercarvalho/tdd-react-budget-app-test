import React from 'react';
import { screen, render } from '@testing-library/react';
import Totals from '.'
import { ITransaction, TransactionType } from '../../models/Transaciton';

const makeSut = (transactions: ITransaction[] = []) => {
  render(<Totals transactions={transactions} />);

  const budgetTotal = screen.getByTestId("budget-total")
  const incomeTotal = screen.getByTestId("income-total")
  const expenseTotal = screen.getByTestId("expense-total")

  return {
    budgetTotal,
    incomeTotal,
    expenseTotal,
  }
}


describe('', () => {
  test('totals init with zero', () => {
    const { budgetTotal, incomeTotal, expenseTotal } = makeSut();

    expect(budgetTotal).toHaveTextContent('0.00');
    expect(incomeTotal).toHaveTextContent('0.00');
    expect(expenseTotal).toHaveTextContent('0.00');
  });

  test('should show correct totals', () => {
    const transactions = [
      { id: '1usX', type: 'income' as TransactionType, description: 'Salário', amount: '2500.92' },
      { id: '2jKa', type: 'income' as TransactionType, description: 'Freela', amount: '1000.00' },
      { id: '3jga', type: 'expense' as TransactionType, description: 'Mercado', amount: '1000.00' },
      { id: '4lkq', type: 'expense' as TransactionType, description: 'Lanche', amount: '31.50' },
    ];
    const { budgetTotal, incomeTotal, expenseTotal } = makeSut(transactions);

    expect(budgetTotal).toHaveTextContent('2469.42');
    expect(incomeTotal).toHaveTextContent('3500.92');
    expect(expenseTotal).toHaveTextContent('1031.50');
  });
});