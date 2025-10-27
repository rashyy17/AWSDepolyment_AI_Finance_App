'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useTransactions } from '../context/TransactionContext';
import { useRouter } from 'next/navigation';

export default function AddTransaction() {
  const { addTransaction } = useTransactions();
  const router = useRouter();
  const [transactionType, setTransactionType] = useState('income');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!amount || !description || !category) {
      alert('Please fill in all fields');
      return;
    }

    // Add the transaction
    addTransaction({
      description,
      amount: transactionType === 'income' ? parseFloat(amount) : -parseFloat(amount),
      category,
      type: transactionType
    });

    // Show success message and redirect
    alert(`${transactionType === 'income' ? 'Income' : 'Expense'} of $${amount} added successfully!`);
    router.push('/dashboard');
  };
  return (
    <div style={{
      minHeight: '100vh',
      background: '#f8f9fa',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      {/* Header */}
      <div style={{
        background: 'white',
        padding: '1rem 2rem',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h1 style={{
          margin: 0,
          fontSize: '1.5rem',
          color: '#667eea'
        }}>
          💰 <Link href="/" style={{textDecoration: 'none', color: 'inherit'}}>Cashy</Link>
        </h1>
        <Link href="/dashboard" style={{
          background: '#667eea',
          color: 'white',
          padding: '0.5rem 1rem',
          borderRadius: '0.5rem',
          textDecoration: 'none'
        }}>
          Back to Dashboard
        </Link>
      </div>

      <div style={{padding: '2rem', maxWidth: '600px', margin: '0 auto'}}>
        <h2 style={{marginBottom: '2rem', color: '#333'}}>Add Transaction</h2>

        <div style={{
          background: 'white',
          padding: '2rem',
          borderRadius: '1rem',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <form onSubmit={handleSubmit}>
            {/* Transaction Type */}
            <div style={{marginBottom: '1.5rem'}}>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: '500',
                color: '#333'
              }}>
                Transaction Type
              </label>
              <div style={{display: 'flex', gap: '1rem'}}>
                <button 
                  type="button" 
                  onClick={() => setTransactionType('income')}
                  style={{
                    padding: '0.75rem 1.5rem',
                    border: `2px solid ${transactionType === 'income' ? '#10b981' : '#e5e7eb'}`,
                    background: transactionType === 'income' ? '#10b981' : 'white',
                    color: transactionType === 'income' ? 'white' : '#666',
                    borderRadius: '0.5rem',
                    fontWeight: '500',
                    cursor: 'pointer'
                  }}
                >
                  Income
                </button>
                <button 
                  type="button" 
                  onClick={() => setTransactionType('expense')}
                  style={{
                    padding: '0.75rem 1.5rem',
                    border: `2px solid ${transactionType === 'expense' ? '#ef4444' : '#e5e7eb'}`,
                    background: transactionType === 'expense' ? '#ef4444' : 'white',
                    color: transactionType === 'expense' ? 'white' : '#666',
                    borderRadius: '0.5rem',
                    fontWeight: '500',
                    cursor: 'pointer'
                  }}
                >
                  Expense
                </button>
              </div>
            </div>

            {/* Amount */}
            <div style={{marginBottom: '1.5rem'}}>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: '500',
                color: '#333'
              }}>
                Amount
              </label>
              <input 
                type="number" 
                step="0.01"
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #e5e7eb',
                  borderRadius: '0.5rem',
                  fontSize: '1rem',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            {/* Description */}
            <div style={{marginBottom: '1.5rem'}}>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: '500',
                color: '#333'
              }}>
                Description
              </label>
              <input 
                type="text" 
                placeholder="Enter description..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #e5e7eb',
                  borderRadius: '0.5rem',
                  fontSize: '1rem',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            {/* Category */}
            <div style={{marginBottom: '1.5rem'}}>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: '500',
                color: '#333'
              }}>
                Category
              </label>
              <select 
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #e5e7eb',
                  borderRadius: '0.5rem',
                  fontSize: '1rem',
                  boxSizing: 'border-box',
                  background: 'white'
                }}
              >
                <option value="">Select Category</option>
                <option value="food">Food & Dining</option>
                <option value="transport">Transportation</option>
                <option value="shopping">Shopping</option>
                <option value="entertainment">Entertainment</option>
                <option value="bills">Bills & Utilities</option>
                <option value="health">Health & Fitness</option>
                <option value="salary">Salary</option>
                <option value="business">Business</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Date */}
            <div style={{marginBottom: '2rem'}}>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: '500',
                color: '#333'
              }}>
                Date
              </label>
              <input 
                type="date" 
                value={date}
                onChange={(e) => setDate(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #e5e7eb',
                  borderRadius: '0.5rem',
                  fontSize: '1rem',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            {/* Submit Button */}
            <button type="submit" style={{
              width: '100%',
              background: transactionType === 'income' ? '#10b981' : '#ef4444',
              color: 'white',
              border: 'none',
              padding: '1rem',
              borderRadius: '0.5rem',
              fontSize: '1rem',
              fontWeight: '500',
              cursor: 'pointer'
            }}>
              Add {transactionType === 'income' ? 'Income' : 'Expense'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}