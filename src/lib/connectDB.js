import { MongoClient, ServerApiVersion } from "mongodb";

let cachedDb = null;

export const connectDB = async () => {
  if (cachedDb) return cachedDb;

  try {
    const uri = process.env.NEXT_PUBLIC_MONGODB_URI;
    if (!uri) {
      throw new Error("MongoDB URI is not defined");
    }

    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });

    await client.connect();
    cachedDb = client.db("carDoctor");
    return cachedDb;
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
};
