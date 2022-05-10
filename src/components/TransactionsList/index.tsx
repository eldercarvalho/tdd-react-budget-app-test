import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { ITransaction } from '../../models/Transaciton';
import { S } from './styled'

type TransactionsListProps = {
  transactions: Array<ITransaction>;
  onDelete: (transactionId: string) => void;
}

const TransactionsList = ({ transactions, onDelete }: TransactionsListProps) => {
  return (
    <S.Table>
      <thead>
        <tr>
          <th>Tipo</th>
          <th>Descrição</th>
          <th>Valor</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {transactions.length ? transactions.map(transaction => (
          <tr key={transaction.id}>
            <td>{transaction.type}</td>
            <td>{transaction.description}</td>
            <td>{transaction.amount}</td>
            <td>
              <button onClick={() => onDelete(transaction.id)}>
                <FaTrash size={22} />
              </button>
            </td>
          </tr>
        )) : (
          <tr>
            <td colSpan={3} align="center">Nenhuma transação adicionada até o momento</td>
          </tr>
        )}
      </tbody>
    </S.Table>
  )
}

export default TransactionsList;