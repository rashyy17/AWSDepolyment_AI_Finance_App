export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">🎉 Cashy Finance App</h1>
        <p className="text-lg text-gray-600 mb-8">Successfully Deployed on AWS Amplify!</p>
        <div className="space-y-2">
          <p className="text-sm text-green-600">✅ Build: Successful</p>
          <p className="text-sm text-green-600">✅ Deployment: Successful</p>
          <p className="text-sm text-green-600">✅ Clerk: Configured</p>
          <p className="text-sm text-blue-600">🔧 Testing: Basic Functionality</p>
        </div>
      </div>
    </div>
  );
}