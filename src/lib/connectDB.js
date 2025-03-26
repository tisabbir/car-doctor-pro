import { MongoClient, ServerApiVersion } from "mongodb";
let db;
export const connectDB = async () => {
    if(db) return db;
    try {

        const uri = process.env.NEXT_PUBLIC_MONGODB_URI
        const client = new MongoClient(uri, {
            serviceApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            }
        })
        db=client.db('carDoctor')
        return db;
    } catch (error) {
        console.log(error)
    }
}