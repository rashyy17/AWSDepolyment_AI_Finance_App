export default function SimpleTest() {
  const timestamp = new Date().toISOString();
  
  return (
    <div>
      <h1>Simple Test - Working!</h1>
      <p>Server Time: {timestamp}</p>
      <p>Node Version: {process.version}</p>
      <p>Environment: {process.env.NODE_ENV}</p>
    </div>
  );
}