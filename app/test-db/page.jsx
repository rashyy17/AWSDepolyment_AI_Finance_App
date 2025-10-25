import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/lib/prisma";

export default async function TestDB() {
  try {
    const user = await currentUser();
    
    if (!user) {
      return (
        <div className="p-8">
          <h1 className="text-2xl font-bold mb-4">Database Connection Test</h1>
          <p className="text-red-600">Please sign in to test database connection</p>
        </div>
      );
    }

    // Test database connection
    const userCount = await db.user.count();
    const dbUser = await db.user.findUnique({
      where: { clerkUserId: user.id }
    });

    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Database Connection Test</h1>
        <div className="space-y-4">
          <p className="text-green-600">✅ Database connection successful</p>
          <p>Total users in database: {userCount}</p>
          <p>Current user in database: {dbUser ? 'Found' : 'Not found'}</p>
          {dbUser && (
            <div className="bg-gray-100 p-4 rounded">
              <p>Name: {dbUser.name}</p>
              <p>Email: {dbUser.email}</p>
              <p>Created: {new Date(dbUser.createdAt).toLocaleDateString()}</p>
            </div>
          )}
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Database Connection Test</h1>
        <p className="text-red-600">❌ Database connection failed</p>
        <p className="text-sm text-gray-600 mt-2">Error: {error.message}</p>
      </div>
    );
  }
}