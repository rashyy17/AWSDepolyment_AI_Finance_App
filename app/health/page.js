export default function HealthCheck() {
  return (
    <html>
      <head>
        <title>Health Check</title>
      </head>
      <body style={{margin: 0, padding: '50px', fontFamily: 'Arial'}}>
        <h1>🟢 Server is Working!</h1>
        <p>If you can see this page, Next.js is running successfully on AWS Amplify.</p>
        <p>Timestamp: {new Date().toISOString()}</p>
        <p>Environment: {process.env.NODE_ENV}</p>
      </body>
    </html>
  );
}