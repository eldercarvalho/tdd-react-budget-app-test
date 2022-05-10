import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TransactionsList from '.'
import { TransactionType } from '../../models/Transaciton';

describe('TransactionsList', () => {
  const transactions = [
    { id: '1', type: 'income' as TransactionType, description: 'Salário', amount: '2500.00' },
    { id: '2', type: 'expense' as TransactionType, description: 'Mercado', amount: '600.00' },
  ];

  it('should show correct headers', () => {
    render(<TransactionsList transactions={[]} onDelete={jest.fn()} />);

    expect(screen.queryByRole('columnheader', { name: "Tipo" })).toBeInTheDocument();
    expect(screen.queryByRole('columnheader', { name: "Descrição" })).toBeInTheDocument();
    expect(screen.queryByRole('columnheader', { name: "Valor" })).toBeInTheDocument();
  });

  it('should show a message if has no transactions', () => {
    render(<TransactionsList transactions={[]} onDelete={jest.fn()} />);

    expect(screen.queryByRole('cell', { name: "Nenhuma transação adicionada até o momento" })).toBeInTheDocument();
  });

  it('should show correct transactions', () => {
    render(<TransactionsList transactions={transactions} onDelete={jest.fn()} />);
    const tbody = within(screen.getAllByRole('rowgroup')[1]);

    expect(tbody.getAllByRole("row")).toHaveLength(2);
    expect(tbody.queryAllByRole('cell')[1]).toHaveTextContent('Salário');
    expect(tbody.queryAllByRole('cell')[2]).toHaveTextContent('2500.00');
    expect(tbody.queryAllByRole('cell')[5]).toHaveTextContent('Mercado');
    expect(tbody.queryAllByRole('cell')[6]).toHaveTextContent('600.00');
  });

  it('should call onDelete callback', () => {
    const onDeleteCallback = jest.fn()
    render(<TransactionsList transactions={transactions} onDelete={onDeleteCallback} />);
    const tbody = within(screen.getAllByRole('rowgroup')[1]);
    const deleteButtons = tbody.getAllByRole('button');

    userEvent.click(deleteButtons[0]);

    expect(onDeleteCallback).toHaveBeenCalledTimes(1);
    expect(onDeleteCallback).toHaveBeenCalledWith('1');
  });

  test('new transactions should appear at the top', () => {});
});