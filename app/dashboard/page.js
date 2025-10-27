export default function Dashboard() {
  const mockData = {
    totalBalance: 5420.50,
    monthlyIncome: 3200.00,
    monthlyExpenses: 2180.75,
    savings: 1019.25
  };

  const recentTransactions = [
    { id: 1, description: "Grocery Store", amount: -85.32, category: "Food", date: "Today" },
    { id: 2, description: "Salary Deposit", amount: 3200.00, category: "Income", date: "Yesterday" },
    { id: 3, description: "Gas Station", amount: -45.20, category: "Transport", date: "2 days ago" },
    { id: 4, description: "Netflix", amount: -15.99, category: "Entertainment", date: "3 days ago" },
    { id: 5, description: "Coffee Shop", amount: -12.50, category: "Food", date: "4 days ago" }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      {/* Header */}
      <div style={{
        background: 'white',
        padding: '1rem 2rem',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: '#667eea',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          💰 <a href="/" style={{textDecoration: 'none', color: 'inherit'}}>Cashy</a>
        </div>
        <div style={{display: 'flex', gap: '1rem', alignItems: 'center'}}>
          <span style={{color: '#666'}}>Welcome back, User!</span>
          <a href="/add-transaction" style={{
            background: '#667eea',
            color: 'white',
            border: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '0.5rem',
            cursor: 'pointer',
            textDecoration: 'none',
            display: 'inline-block'
          }}>
            Add Transaction
          </a>
        </div>
      </div>

      <div style={{padding: '2rem', maxWidth: '1200px', margin: '0 auto'}}>
        {/* Dashboard Title */}
        <h1 style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          marginBottom: '2rem',
          color: '#333'
        }}>
          Financial Dashboard
        </h1>

        {/* Balance Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
          marginBottom: '2rem'
        }}>
          <div style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            padding: '1.5rem',
            borderRadius: '1rem',
            boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)'
          }}>
            <div style={{fontSize: '0.9rem', opacity: 0.8, marginBottom: '0.5rem'}}>Total Balance</div>
            <div style={{fontSize: '2rem', fontWeight: 'bold'}}>${mockData.totalBalance.toFixed(2)}</div>
          </div>

          <div style={{
            background: 'white',
            padding: '1.5rem',
            borderRadius: '1rem',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            border: '1px solid #f0f0f0'
          }}>
            <div style={{fontSize: '0.9rem', color: '#666', marginBottom: '0.5rem'}}>Monthly Income</div>
            <div style={{fontSize: '1.8rem', fontWeight: 'bold', color: '#10b981'}}>
              +${mockData.monthlyIncome.toFixed(2)}
            </div>
          </div>

          <div style={{
            background: 'white',
            padding: '1.5rem',
            borderRadius: '1rem',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            border: '1px solid #f0f0f0'
          }}>
            <div style={{fontSize: '0.9rem', color: '#666', marginBottom: '0.5rem'}}>Monthly Expenses</div>
            <div style={{fontSize: '1.8rem', fontWeight: 'bold', color: '#ef4444'}}>
              -${mockData.monthlyExpenses.toFixed(2)}
            </div>
          </div>

          <div style={{
            background: 'white',
            padding: '1.5rem',
            borderRadius: '1rem',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            border: '1px solid #f0f0f0'
          }}>
            <div style={{fontSize: '0.9rem', color: '#666', marginBottom: '0.5rem'}}>Savings This Month</div>
            <div style={{fontSize: '1.8rem', fontWeight: 'bold', color: '#8b5cf6'}}>
              ${mockData.savings.toFixed(2)}
            </div>
          </div>
        </div>

        {/* Recent Transactions */}
        <div style={{
          background: 'white',
          borderRadius: '1rem',
          boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
          overflow: 'hidden'
        }}>
          <div style={{
            padding: '1.5rem',
            borderBottom: '1px solid #f0f0f0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <h2 style={{fontSize: '1.25rem', fontWeight: 'bold', margin: 0}}>Recent Transactions</h2>
            <button style={{
              background: 'none',
              border: '1px solid #667eea',
              color: '#667eea',
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
              cursor: 'pointer'
            }}>
              View All
            </button>
          </div>
          
          <div>
            {recentTransactions.map((transaction) => (
              <div key={transaction.id} style={{
                padding: '1rem 1.5rem',
                borderBottom: '1px solid #f9f9f9',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <div>
                  <div style={{fontWeight: '500', marginBottom: '0.25rem'}}>
                    {transaction.description}
                  </div>
                  <div style={{fontSize: '0.85rem', color: '#666'}}>
                    {transaction.category} • {transaction.date}
                  </div>
                </div>
                <div style={{
                  fontWeight: 'bold',
                  color: transaction.amount > 0 ? '#10b981' : '#ef4444'
                }}>
                  {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
          marginTop: '2rem'
        }}>
          <a href="/add-transaction" style={{
            background: '#10b981',
            color: 'white',
            border: 'none',
            padding: '1rem',
            borderRadius: '0.75rem',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: '500',
            textDecoration: 'none',
            display: 'block',
            textAlign: 'center'
          }}>
            + Add Income
          </a>
          <a href="/add-transaction" style={{
            background: '#ef4444',
            color: 'white',
            border: 'none',
            padding: '1rem',
            borderRadius: '0.75rem',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: '500',
            textDecoration: 'none',
            display: 'block',
            textAlign: 'center'
          }}>
            - Add Expense
          </a>
          <button style={{
            background: '#8b5cf6',
            color: 'white',
            border: 'none',
            padding: '1rem',
            borderRadius: '0.75rem',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: '500'
          }}>
            📊 View Reports
          </button>
        </div>
      </div>
    </div>
  );
}