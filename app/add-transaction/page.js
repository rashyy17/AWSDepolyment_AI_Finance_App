export default function AddTransaction() {
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
        <div style={{display: 'flex', gap: '1rem'}}>
          <a href="/dashboard" style={{
            color: '#667eea',
            textDecoration: 'none',
            padding: '0.5rem 1rem'
          }}>
            ← Back to Dashboard
          </a>
        </div>
      </div>

      <div style={{padding: '2rem', maxWidth: '600px', margin: '0 auto'}}>
        <h1 style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          marginBottom: '2rem',
          color: '#333',
          textAlign: 'center'
        }}>
          Add New Transaction
        </h1>

        <div style={{
          background: 'white',
          padding: '2rem',
          borderRadius: '1rem',
          boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
        }}>
          <form style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
            {/* Transaction Type */}
            <div>
              <label style={{
                display: 'block',
                fontSize: '0.9rem',
                fontWeight: '500',
                marginBottom: '0.5rem',
                color: '#333'
              }}>
                Transaction Type
              </label>
              <div style={{display: 'flex', gap: '1rem'}}>
                <label style={{display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer'}}>
                  <input type="radio" name="type" value="income" defaultChecked />
                  <span style={{color: '#10b981', fontWeight: '500'}}>💰 Income</span>
                </label>
                <label style={{display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer'}}>
                  <input type="radio" name="type" value="expense" />
                  <span style={{color: '#ef4444', fontWeight: '500'}}>💸 Expense</span>
                </label>
              </div>
            </div>

            {/* Amount */}
            <div>
              <label style={{
                display: 'block',
                fontSize: '0.9rem',
                fontWeight: '500',
                marginBottom: '0.5rem',
                color: '#333'
              }}>
                Amount ($)
              </label>
              <input
                type="number"
                step="0.01"
                placeholder="0.00"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #ddd',
                  borderRadius: '0.5rem',
                  fontSize: '1rem',
                  outline: 'none'
                }}
              />
            </div>

            {/* Description */}
            <div>
              <label style={{
                display: 'block',
                fontSize: '0.9rem',
                fontWeight: '500',
                marginBottom: '0.5rem',
                color: '#333'
              }}>
                Description
              </label>
              <input
                type="text"
                placeholder="e.g., Grocery shopping, Salary, Coffee..."
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #ddd',
                  borderRadius: '0.5rem',
                  fontSize: '1rem',
                  outline: 'none'
                }}
              />
            </div>

            {/* Category */}
            <div>
              <label style={{
                display: 'block',
                fontSize: '0.9rem',
                fontWeight: '500',
                marginBottom: '0.5rem',
                color: '#333'
              }}>
                Category
              </label>
              <select style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #ddd',
                borderRadius: '0.5rem',
                fontSize: '1rem',
                outline: 'none',
                background: 'white'
              }}>
                <option>Select a category</option>
                <option>🍔 Food & Dining</option>
                <option>🚗 Transportation</option>
                <option>🏠 Housing</option>
                <option>🎬 Entertainment</option>
                <option>🛒 Shopping</option>
                <option>💼 Work</option>
                <option>💰 Income</option>
                <option>📱 Bills & Utilities</option>
                <option>🏥 Healthcare</option>
                <option>📚 Education</option>
                <option>✈️ Travel</option>
                <option>🎁 Gifts</option>
                <option>💳 Other</option>
              </select>
            </div>

            {/* Date */}
            <div>
              <label style={{
                display: 'block',
                fontSize: '0.9rem',
                fontWeight: '500',
                marginBottom: '0.5rem',
                color: '#333'
              }}>
                Date
              </label>
              <input
                type="date"
                defaultValue={new Date().toISOString().split('T')[0]}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #ddd',
                  borderRadius: '0.5rem',
                  fontSize: '1rem',
                  outline: 'none'
                }}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '0.75rem',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                marginTop: '1rem'
              }}
            >
              Add Transaction
            </button>
          </form>

          {/* Demo Note */}
          <div style={{
            marginTop: '2rem',
            padding: '1rem',
            background: '#f8f9fa',
            borderRadius: '0.5rem',
            border: '1px solid #e9ecef',
            textAlign: 'center'
          }}>
            <p style={{margin: 0, color: '#666', fontSize: '0.9rem'}}>
              📝 <strong>Demo Mode:</strong> This is a demonstration form. 
              In the full version, transactions would be saved to your personal database.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}