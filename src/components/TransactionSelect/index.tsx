import React, { useEffect, useState } from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import { S } from './styled'

type TransactionSelectProps = {
  value: string,
  onChange: (value: string) => void 
}

const TransactionSelect = ({ value, onChange }: TransactionSelectProps) => {
  const [open, setOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState(value);

  useEffect(() => {
    setCurrentValue(value);
  }, [value]);

  const handleOptionClick = (type: string) => {
    setCurrentValue(type);
    onChange(type);
    setOpen(false);
  }

  return (
    <S.Container aria-expanded={open}>
      <S.Button
        role="button" onClick={() => setOpen((oldValue: boolean) => !oldValue)}
        isOpened={open}
        color={currentValue === 'income' ? "green" : "red"}
      >
        {currentValue === 'income' && (
          <>
            <FaArrowDown size={24} />
            <span data-testid="income-value">Income</span>
          </>
        )}
        {currentValue === 'expense' && (
          <>
            <FaArrowUp  size={24} />
            <span data-testid="expense-value">Expense</span>
          </>
        )}
      </S.Button>
      <S.Options role="listbox" isOpened={open}>
      {currentValue === 'expense' ? (
        <div role="option" aria-selected="false" onClick={() => handleOptionClick('income')}>
          <FaArrowDown size={24} />
          <span>Income</span>
        </div> 
       ) : (
        <div role="option" aria-selected="false" onClick={() => handleOptionClick('expense')}>
          <FaArrowUp size={24} />
          <span>Expense</span>
        </div> 
       )}
      </S.Options>
    </S.Container>
  )
}

TransactionSelect.S = S;

export default TransactionSelect;