import React, { useState } from 'react';
import { GlobalStyles } from './styled/global';
import AddTransaction from './components/AddTransactionForm';
import { S } from './styled';
import TransactionsList from './components/TransactionsList';
import Totals from './components/Totals';
import { ITransaction } from './models/Transaciton';

function App() {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  const handleSubmit = (transaction: Omit<ITransaction, 'id'>) => {
    setTransactions([
      ...transactions,
      {
        id: Math.random().toString(36).substring(7),
        ...transaction,
      }
    ])
  }

  return (
    <>
      <GlobalStyles />
      <S.Container>
        <h1>My Budget</h1>
        <Totals transactions={transactions}  />
        <AddTransaction onSubmit={handleSubmit} />
        <TransactionsList transactions={transactions} onDelete={() => {}} />
      </S.Container>
    </>
  );
}

export default App;
