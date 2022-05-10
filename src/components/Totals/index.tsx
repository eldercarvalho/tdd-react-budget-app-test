import { useMemo } from "react";
import { ITransaction } from "../../models/Transaciton";
import { S } from './styled'

type TotalsProps = {
  transactions: ITransaction[]
}

const Totals = ({ transactions }: TotalsProps) => {
  const budgetTotal = useMemo(() => {
    return transactions.reduce((acum, curr) => {
      if (curr.type === 'income') {
        acum += parseFloat(curr.amount);
      }

      if (curr.type === 'expense') {
        acum -= parseFloat(curr.amount);
      }
  
      return acum;
    }, 0.00);
  }, [transactions]);

  const incomeTotal = useMemo(() => {
    return transactions.reduce((acum, curr) => {
      acum += curr.type === 'income' ? parseFloat(curr.amount) : 0;
      return acum;
    }, 0.00);
  }, [transactions]);

  const expenseTotal = useMemo(() => {
    return transactions.reduce((acum, curr) => {
      acum += curr.type === 'expense' ? parseFloat(curr.amount) : 0;
      return acum;
    }, 0.00);
  }, [transactions]);

  return (
    <S.Container>
      <S.Total type="total">
        <strong>Saldo:</strong>{' '}
        <span data-testid="budget-total">{budgetTotal.toFixed(2)}</span>
      </S.Total>
      <S.Total type="income">
        <strong>Entradas:</strong>{' '}
        <span data-testid="income-total">{incomeTotal.toFixed(2)}</span>
      </S.Total>
      <S.Total type="expense">
        <strong>Saídas:</strong>{' '}
        <span data-testid="expense-total">{expenseTotal.toFixed(2)}</span>
      </S.Total>
    </S.Container>
  );
}

export default Totals;