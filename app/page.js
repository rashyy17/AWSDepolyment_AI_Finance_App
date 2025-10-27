export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      {/* Simple Header */}
      <div style={{
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h1 style={{margin: 0, fontSize: '1.5rem'}}>💰 Cashy</h1>
        <a href="/dashboard" style={{
          background: 'rgba(255,255,255,0.2)',
          color: 'white',
          padding: '0.5rem 1rem',
          borderRadius: '0.5rem',
          textDecoration: 'none',
          border: '1px solid rgba(255,255,255,0.3)'
        }}>
          Dashboard
        </a>
      </div>

      {/* Hero */}
      <div style={{
        padding: '4rem 2rem',
        textAlign: 'center',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          marginBottom: '1rem'
        }}>
          Personal Finance Tracker
        </h2>
        <p style={{
          fontSize: '1.2rem',
          marginBottom: '2rem',
          opacity: 0.9
        }}>
          Track your income and expenses with a simple, beautiful dashboard
        </p>
        
        <a href="/dashboard" style={{
          background: 'white',
          color: '#667eea',
          padding: '1rem 2rem',
          borderRadius: '0.75rem',
          fontSize: '1.1rem',
          fontWeight: 'bold',
          textDecoration: 'none',
          display: 'inline-block',
          boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
        }}>
          Start Tracking →
        </a>
      </div>

      {/* Simple Features */}
      <div style={{
        padding: '2rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '1rem',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <div style={{
          background: 'rgba(255,255,255,0.1)',
          padding: '1.5rem',
          borderRadius: '1rem',
          textAlign: 'center'
        }}>
          <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}>📊</div>
          <h3 style={{margin: '0 0 0.5rem 0'}}>Track Expenses</h3>
          <p style={{margin: 0, opacity: 0.8}}>Monitor your spending</p>
        </div>
        
        <div style={{
          background: 'rgba(255,255,255,0.1)',
          padding: '1.5rem',
          borderRadius: '1rem',
          textAlign: 'center'
        }}>
          <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}>💰</div>
          <h3 style={{margin: '0 0 0.5rem 0'}}>Manage Income</h3>
          <p style={{margin: 0, opacity: 0.8}}>Track your earnings</p>
        </div>
        
        <div style={{
          background: 'rgba(255,255,255,0.1)',
          padding: '1.5rem',
          borderRadius: '1rem',
          textAlign: 'center'
        }}>
          <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}>📱</div>
          <h3 style={{margin: '0 0 0.5rem 0'}}>Simple Interface</h3>
          <p style={{margin: 0, opacity: 0.8}}>Easy to use design</p>
        </div>
      </div>
    </div>
  );
}
