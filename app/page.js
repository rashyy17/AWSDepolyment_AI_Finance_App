export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Cashy - Working!</h1>
        <p className="text-lg text-gray-600 mb-8">
          If you can see this, the server is working!
        </p>
        <p className="text-sm text-green-600">
          ✅ Server-side rendering successful
        </p>
        <p className="text-sm text-blue-600 mt-4">
          Deploy time: {new Date().toISOString()}
        </p>
      </div>
    </div>
  );
}
