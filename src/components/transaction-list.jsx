import React, { useContext } from 'react';
import { Transaction } from './transaction';
//to bring state in
import { GlobalContext } from '../context/GlobalState';
export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction transaction={transaction} key={transaction.id} />
        ))}
      </ul>
    </>
  );
};
