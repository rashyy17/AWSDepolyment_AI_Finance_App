export default function Home() {
  return (
    <div style={{
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      margin: 0, 
      padding: '50px', 
      fontFamily: 'Arial', 
      backgroundColor: '#f5f5f5'
    }}>
      <div style={{maxWidth: '600px', textAlign: 'center'}}>
        <h1 style={{color: '#2563eb', fontSize: '48px', marginBottom: '20px'}}>
          🟢 Cashy Server Online
        </h1>
        <p style={{fontSize: '18px', color: '#666', marginBottom: '30px'}}>
          Next.js application is running successfully on AWS Amplify!
        </p>
        <div style={{
          backgroundColor: 'white', 
          padding: '20px', 
          borderRadius: '8px', 
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <p><strong>Deploy Time:</strong> {new Date().toISOString()}</p>
          <p><strong>Environment:</strong> {process.env.NODE_ENV || 'development'}</p>
          <p><strong>Status:</strong> ✅ All systems operational</p>
          <p><strong>Node.js:</strong> v{process.version}</p>
        </div>
      </div>
    </div>
  );
}
