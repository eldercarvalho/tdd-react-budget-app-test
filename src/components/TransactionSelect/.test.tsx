import { render, screen, fireEvent } from '@testing-library/react';
import TransactionSelect from '.'

const setup = (callback = (value: string) => {}) => {
  render(<TransactionSelect value="income" onChange={callback} />);
  const button = screen.getByRole('button');
  const income = screen.getByText('Income');

  return {
    button,
    income,
    pickOption: () => {
      fireEvent.click(button);
      fireEvent.click(screen.getByRole('option'));
    }
  }
}

describe("TransactionSelect", () => {
  it('should init with income option selected', () => {
    const { button, income } = setup();

    expect(button).toContainElement(income);
  });

  it('should init with options popup closed', () => {
    render(<TransactionSelect value="income" onChange={jest.fn()} />);

    expect(screen.getByRole("listbox")).toHaveStyle({ "opacity": 0 });
  });

  it('should show options popup', () => {
    render(<TransactionSelect value="income" onChange={jest.fn()} />);
    const button = screen.getByRole('button');

    fireEvent.click(button);

    const optionsList = screen.getByRole('listbox');
    expect(optionsList).toHaveStyle({ opacity: 1 });
  });

  it('should change transaction type after select an option', () => {
    render(<TransactionSelect value="income" onChange={jest.fn()} />);
    const button = screen.getByRole('button');

    fireEvent.click(button);
    fireEvent.click(screen.getByRole('option'));
    
    const expense = screen.getByText(/Expense/i);
    expect(button).toContainElement(expense);
  });

  it('should hide options popup after pick a option', () => {
    const { pickOption } = setup();

    pickOption();
    
    const optionsPopup = screen.getByRole('listbox');
    expect(optionsPopup).toHaveStyle({ opacity: 0 });
  });

  it('should have correct color for transaction type', () => {
    const { button, pickOption } = setup();

    expect(button).toHaveStyle({ "color": "green" });

    pickOption();

    expect(button).toHaveStyle({ color: "red" })
  });

  it('should call onChange function after pick an option', () => {
    const onChange = jest.fn();
    const { pickOption } = setup(onChange);

    pickOption();

    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith("expense");
  });
});