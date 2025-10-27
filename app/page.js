export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white'
    }}>
      {/* Navigation */}
      <nav style={{
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          💰 Cashy
        </div>
        <div style={{display: 'flex', gap: '1rem'}}>
          <a href="#features" style={{color: 'white', textDecoration: 'none'}}>Features</a>
          <a href="/dashboard" style={{color: 'white', textDecoration: 'none'}}>Demo</a>
          <a href="/dashboard" style={{
            background: 'rgba(255,255,255,0.2)',
            border: '1px solid rgba(255,255,255,0.3)',
            color: 'white',
            padding: '0.5rem 1rem',
            borderRadius: '0.5rem',
            cursor: 'pointer',
            textDecoration: 'none',
            display: 'inline-block'
          }}>
            Get Started
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <div style={{
        padding: '4rem 2rem',
        textAlign: 'center',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h1 style={{
          fontSize: '3.5rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
          background: 'linear-gradient(45deg, #fff, #e1e8ff)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Take Control of Your Finances
        </h1>
        <p style={{
          fontSize: '1.25rem',
          marginBottom: '2rem',
          opacity: 0.9,
          maxWidth: '600px',
          margin: '0 auto 2rem auto'
        }}>
          Track expenses, manage budgets, and achieve your financial goals with Cashy - 
          the modern personal finance dashboard designed for today's needs.
        </p>
        
        <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '3rem'}}>
          <a href="/dashboard" style={{
            background: 'white',
            color: '#667eea',
            border: 'none',
            padding: '1rem 2rem',
            borderRadius: '0.75rem',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
            textDecoration: 'none',
            display: 'inline-block'
          }}>
            Start Tracking Free
          </a>
          <a href="/dashboard" style={{
            background: 'rgba(255,255,255,0.1)',
            color: 'white',
            border: '1px solid rgba(255,255,255,0.3)',
            padding: '1rem 2rem',
            borderRadius: '0.75rem',
            fontSize: '1.1rem',
            cursor: 'pointer',
            textDecoration: 'none',
            display: 'inline-block'
          }}>
            View Demo
          </a>
        </div>

        {/* Stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          marginTop: '4rem'
        }}>
          <div style={{textAlign: 'center'}}>
            <div style={{fontSize: '2.5rem', fontWeight: 'bold'}}>$2.5M+</div>
            <div style={{opacity: 0.8}}>Money Tracked</div>
          </div>
          <div style={{textAlign: 'center'}}>
            <div style={{fontSize: '2.5rem', fontWeight: 'bold'}}>10K+</div>
            <div style={{opacity: 0.8}}>Active Users</div>
          </div>
          <div style={{textAlign: 'center'}}>
            <div style={{fontSize: '2.5rem', fontWeight: 'bold'}}>99.9%</div>
            <div style={{opacity: 0.8}}>Uptime</div>
          </div>
          <div style={{textAlign: 'center'}}>
            <div style={{fontSize: '2.5rem', fontWeight: 'bold'}}>4.9★</div>
            <div style={{opacity: 0.8}}>User Rating</div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" style={{
        background: 'rgba(255,255,255,0.1)',
        padding: '4rem 2rem',
        backdropFilter: 'blur(10px)'
      }}>
        <div style={{maxWidth: '1200px', margin: '0 auto'}}>
          <h2 style={{
            fontSize: '2.5rem',
            textAlign: 'center',
            marginBottom: '3rem',
            fontWeight: 'bold'
          }}>
            Everything You Need to Manage Money
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            <div style={{
              background: 'rgba(255,255,255,0.1)',
              padding: '2rem',
              borderRadius: '1rem',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.2)'
            }}>
              <div style={{fontSize: '2rem', marginBottom: '1rem'}}>📊</div>
              <h3 style={{fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem'}}>
                Expense Tracking
              </h3>
              <p style={{opacity: 0.8}}>
                Automatically categorize and track all your expenses with intelligent insights.
              </p>
            </div>

            <div style={{
              background: 'rgba(255,255,255,0.1)',
              padding: '2rem',
              borderRadius: '1rem',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.2)'
            }}>
              <div style={{fontSize: '2rem', marginBottom: '1rem'}}>🎯</div>
              <h3 style={{fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem'}}>
                Budget Goals
              </h3>
              <p style={{opacity: 0.8}}>
                Set realistic budgets and track your progress toward financial goals.
              </p>
            </div>

            <div style={{
              background: 'rgba(255,255,255,0.1)',
              padding: '2rem',
              borderRadius: '1rem',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.2)'
            }}>
              <div style={{fontSize: '2rem', marginBottom: '1rem'}}>📱</div>
              <h3 style={{fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem'}}>
                Mobile Friendly
              </h3>
              <p style={{opacity: 0.8}}>
                Access your finances anywhere with our responsive, mobile-first design.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div style={{
        padding: '4rem 2rem',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)'
      }}>
        <h2 style={{
          fontSize: '2.5rem',
          marginBottom: '1rem',
          fontWeight: 'bold'
        }}>
          Ready to Transform Your Finances?
        </h2>
        <p style={{
          fontSize: '1.1rem',
          marginBottom: '2rem',
          opacity: 0.9
        }}>
          Join thousands of users who have taken control of their financial future with Cashy.
        </p>
        <a href="/dashboard" style={{
          background: 'white',
          color: '#667eea',
          border: 'none',
          padding: '1rem 3rem',
          borderRadius: '0.75rem',
          fontSize: '1.2rem',
          fontWeight: 'bold',
          cursor: 'pointer',
          boxShadow: '0 6px 20px rgba(0,0,0,0.3)',
          transform: 'translateY(0)',
          transition: 'all 0.3s ease',
          textDecoration: 'none',
          display: 'inline-block'
        }}>
          Start Your Journey Today →
        </a>
      </div>

      {/* Footer */}
      <div style={{
        padding: '2rem',
        textAlign: 'center',
        background: 'rgba(0,0,0,0.2)',
        opacity: 0.8
      }}>
        <p>© 2025 Cashy - Personal Finance Dashboard. Built with ❤️ for better financial health.</p>
      </div>
    </div>
  );
}
