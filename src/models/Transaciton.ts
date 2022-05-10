export type TransactionType = 'income' | 'expense';

export interface ITransaction {
  id: string;
  type: TransactionType;
  description: string,
  amount: string;
}