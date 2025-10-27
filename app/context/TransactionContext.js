'use client';

import { createContext, useContext, useState } from 'react';

const TransactionContext = createContext();

export function TransactionProvider({ children }) {
  const [transactions, setTransactions] = useState([
    { id: 1, description: "Grocery Store", amount: -85.32, category: "Food", date: "Today", type: "expense" },
    { id: 2, description: "Salary", amount: 1200.00, category: "Income", date: "Yesterday", type: "income" },
    { id: 3, description: "Coffee Shop", amount: -12.50, category: "Food", date: "2 days ago", type: "expense" },
    { id: 4, description: "Gas Station", amount: -45.20, category: "Transport", date: "3 days ago", type: "expense" }
  ]);

  const addTransaction = (newTransaction) => {
    const transaction = {
      id: Date.now(), // Simple ID generation
      ...newTransaction,
      date: "Today" // Simplified for demo
    };
    setTransactions([transaction, ...transactions]);
  };

  const getBalance = () => {
    return transactions.reduce((total, transaction) => total + transaction.amount, 0);
  };

  const getMonthlyIncome = () => {
    return transactions
      .filter(t => t.type === 'income')
      .reduce((total, transaction) => total + transaction.amount, 0);
  };

  const getMonthlyExpenses = () => {
    return Math.abs(transactions
      .filter(t => t.type === 'expense')
      .reduce((total, transaction) => total + transaction.amount, 0));
  };

  return (
    <TransactionContext.Provider value={{
      transactions,
      addTransaction,
      getBalance,
      getMonthlyIncome,
      getMonthlyExpenses
    }}>
      {children}
    </TransactionContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionContext);
  if (!context) {
    throw new Error('useTransactions must be used within a TransactionProvider');
  }
  return context;
}
