import { useState, ChangeEvent, SyntheticEvent } from 'react';
import { ITransaction } from '../../models/Transaciton';
import TransactionSelect from '../TransactionSelect';
import { S } from './styled'

type AddTransactionFormProps = {
  onSubmit: (value: Omit<ITransaction, "id">) => void
}

const AddTransactionForm = ({ onSubmit }: AddTransactionFormProps) => {
  const [type, setType] = useState('income');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    if (description === '') return;

    onSubmit({
      type: type as 'income' | 'expense',
      description,
      amount,
    });

    setDescription('');
    setAmount('');
  }

  return (
    <S.Form onSubmit={handleSubmit}>
      <TransactionSelect value={type} onChange={(value) => setType(value)} />
      <S.Input
        type="text" 
        placeholder="Ex: Salário, Mercado, Barzinho..."
        willGrow={true}
        value={description}
        onChange={(event: ChangeEvent<HTMLInputElement>) => setDescription(event.target.value)} 
      />
      <S.Input
        type="text"
        placeholder="1000.00"
        willGrow={false}
        value={amount}
        onChange={(event: ChangeEvent<HTMLInputElement>) => setAmount(event.target.value)} 
      />
      <button type="submit">Salvar</button>
    </S.Form>
  );
}

AddTransactionForm.S = S;

export default AddTransactionForm;