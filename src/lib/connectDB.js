import { MongoClient, ServerApiVersion } from "mongodb";

let cachedDb = null;  // Better variable name to indicate caching

export const connectDB = async () => {
    if (cachedDb) return cachedDb;
    
    try {
        const uri = process.env.NEXT_PUBLIC_MONGODB_URI;
        if (!uri) {
            throw new Error("MongoDB URI is not defined");
        }

        const client = new MongoClient(uri, {
            serverApi: {  // Fixed: it should be 'serverApi' not 'serviceApi'
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            }
        });

        await client.connect();  // You need to actually connect to the client
        cachedDb = client.db('carDoctor');
        return cachedDb;
        
    } catch (error) {
        console.error("MongoDB connection error:", error);
        throw error;  // Important: rethrow the error to handle it in the route
    }
}