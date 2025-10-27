import Link from 'next/link';

export default function AddTransaction() {
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
          <form>
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
                <button type="button" style={{
                  padding: '0.75rem 1.5rem',
                  border: '2px solid #10b981',
                  background: '#10b981',
                  color: 'white',
                  borderRadius: '0.5rem',
                  fontWeight: '500',
                  cursor: 'pointer'
                }}>
                  Income
                </button>
                <button type="button" style={{
                  padding: '0.75rem 1.5rem',
                  border: '2px solid #e5e7eb',
                  background: 'white',
                  color: '#666',
                  borderRadius: '0.5rem',
                  fontWeight: '500',
                  cursor: 'pointer'
                }}>
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
                placeholder="0.00"
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
              <select style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #e5e7eb',
                borderRadius: '0.5rem',
                fontSize: '1rem',
                boxSizing: 'border-box',
                background: 'white'
              }}>
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
              background: '#667eea',
              color: 'white',
              border: 'none',
              padding: '1rem',
              borderRadius: '0.5rem',
              fontSize: '1rem',
              fontWeight: '500',
              cursor: 'pointer'
            }}>
              Add Transaction
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}