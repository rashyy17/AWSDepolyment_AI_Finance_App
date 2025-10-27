import Link from 'next/link';

export default function Dashboard() {
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
        <Link href="/add-transaction" style={{
          background: '#667eea',
          color: 'white',
          padding: '0.5rem 1rem',
          borderRadius: '0.5rem',
          textDecoration: 'none'
        }}>
          Add Transaction
        </Link>
      </div>

      <div style={{padding: '2rem', maxWidth: '800px', margin: '0 auto'}}>
        <h2 style={{marginBottom: '2rem', color: '#333'}}>Dashboard</h2>

        {/* Balance Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
          marginBottom: '2rem'
        }}>
          <div style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            padding: '1.5rem',
            borderRadius: '1rem'
          }}>
            <div style={{fontSize: '0.9rem', opacity: 0.8}}>Total Balance</div>
            <div style={{fontSize: '2rem', fontWeight: 'bold'}}>$2,540.50</div>
          </div>

          <div style={{
            background: 'white',
            padding: '1.5rem',
            borderRadius: '1rem',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <div style={{fontSize: '0.9rem', color: '#666'}}>This Month</div>
            <div style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#10b981'}}>
              +$1,200
            </div>
          </div>

          <div style={{
            background: 'white',
            padding: '1.5rem',
            borderRadius: '1rem',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <div style={{fontSize: '0.9rem', color: '#666'}}>Expenses</div>
            <div style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#ef4444'}}>
              -$659.50
            </div>
          </div>
        </div>

        {/* Recent Transactions */}
        <div style={{
          background: 'white',
          borderRadius: '1rem',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          overflow: 'hidden'
        }}>
          <div style={{
            padding: '1rem',
            borderBottom: '1px solid #f0f0f0'
          }}>
            <h3 style={{margin: 0}}>Recent Transactions</h3>
          </div>
          
          <div>
            <div style={{
              padding: '1rem',
              borderBottom: '1px solid #f9f9f9',
              display: 'flex',
              justifyContent: 'space-between'
            }}>
              <div>
                <div style={{fontWeight: '500'}}>Grocery Store</div>
                <div style={{fontSize: '0.85rem', color: '#666'}}>Today</div>
              </div>
              <div style={{color: '#ef4444', fontWeight: 'bold'}}>-$85.32</div>
            </div>

            <div style={{
              padding: '1rem',
              borderBottom: '1px solid #f9f9f9',
              display: 'flex',
              justifyContent: 'space-between'
            }}>
              <div>
                <div style={{fontWeight: '500'}}>Salary</div>
                <div style={{fontSize: '0.85rem', color: '#666'}}>Yesterday</div>
              </div>
              <div style={{color: '#10b981', fontWeight: 'bold'}}>+$1,200.00</div>
            </div>

            <div style={{
              padding: '1rem',
              borderBottom: '1px solid #f9f9f9',
              display: 'flex',
              justifyContent: 'space-between'
            }}>
              <div>
                <div style={{fontWeight: '500'}}>Coffee Shop</div>
                <div style={{fontSize: '0.85rem', color: '#666'}}>2 days ago</div>
              </div>
              <div style={{color: '#ef4444', fontWeight: 'bold'}}>-$12.50</div>
            </div>

            <div style={{
              padding: '1rem',
              display: 'flex',
              justifyContent: 'space-between'
            }}>
              <div>
                <div style={{fontWeight: '500'}}>Gas Station</div>
                <div style={{fontSize: '0.85rem', color: '#666'}}>3 days ago</div>
              </div>
              <div style={{color: '#ef4444', fontWeight: 'bold'}}>-$45.20</div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '1rem',
          marginTop: '2rem'
        }}>
          <Link href="/add-transaction" style={{
            background: '#10b981',
            color: 'white',
            padding: '1rem',
            borderRadius: '0.75rem',
            textDecoration: 'none',
            textAlign: 'center',
            fontWeight: '500'
          }}>
            + Add Income
          </Link>
          <Link href="/add-transaction" style={{
            background: '#ef4444',
            color: 'white',
            padding: '1rem',
            borderRadius: '0.75rem',
            textDecoration: 'none',
            textAlign: 'center',
            fontWeight: '500'
          }}>
            - Add Expense
          </Link>
        </div>
      </div>
    </div>
  );
}