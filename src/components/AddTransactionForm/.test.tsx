import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddTransactionForm from '.';

const makeSut = () => {
  const onSubmit = jest.fn();
  render(<AddTransactionForm onSubmit={onSubmit} />)
  const descriptionInput = screen.getByPlaceholderText(/Ex: Salário, Mercado, Barzinho.../);
  const amountInput = screen.getByPlaceholderText(/1000.00/);
  const submitButton = screen.getByText(/Salvar/i);

  return {
    onSubmit,
    descriptionInput,
    amountInput,
    submitButton,
  }
}

describe("AddTransaction", () => {
  test('should call onSubmit callback when form is submitted', () => {
    const { onSubmit, descriptionInput, amountInput, submitButton } = makeSut();
    const expectedValue = { type: 'income', description: 'Salário', amount: '2500.00' }
    
    userEvent.type(descriptionInput, 'Salário');
    userEvent.type(amountInput, '2500.00');
    userEvent.click(submitButton);

    expect(onSubmit).toHaveBeenCalledWith(expectedValue);
  });

  test('should not call onSubmit callback if description and value is empty', () => {
    const { onSubmit, submitButton } = makeSut();

    userEvent.click(submitButton);

    expect(onSubmit).not.toHaveBeenCalled();
  });

  test("should reset description field after submit", () => {
    const { descriptionInput, amountInput, submitButton } = makeSut();

    userEvent.type(amountInput, '2500.00');
    userEvent.click(screen.getByRole('button', { name: 'Income' }));
    userEvent.click(screen.getByRole('option'));
    userEvent.type(descriptionInput, 'Salário');
    userEvent.click(screen.getByText(/Salvar/i));

    expect(descriptionInput).toHaveValue("");
    expect(amountInput).toHaveValue("");
  })
});