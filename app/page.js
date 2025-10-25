export default function Home() {
  return (
    <html>
      <head>
        <title>Cashy - Health Check</title>
      </head>
      <body style={{margin: 0, padding: '50px', fontFamily: 'Arial', backgroundColor: '#f5f5f5'}}>
        <div style={{maxWidth: '600px', margin: '0 auto', textAlign: 'center'}}>
          <h1 style={{color: '#2563eb', fontSize: '48px', marginBottom: '20px'}}>🟢 Cashy Server Online</h1>
          <p style={{fontSize: '18px', color: '#666', marginBottom: '30px'}}>
            Next.js application is running successfully on AWS Amplify!
          </p>
          <div style={{backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'}}>
            <p><strong>Deploy Time:</strong> {new Date().toISOString()}</p>
            <p><strong>Environment:</strong> {process.env.NODE_ENV || 'development'}</p>
            <p><strong>Status:</strong> ✅ All systems operational</p>
          </div>
          <div style={{marginTop: '30px'}}>
            <a href="/dashboard" style={{
              backgroundColor: '#2563eb', 
              color: 'white', 
              padding: '12px 24px', 
              textDecoration: 'none', 
              borderRadius: '6px',
              display: 'inline-block'
            }}>
              Go to Dashboard
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
