import { connectDB } from "@/lib/connectDB";
import bcrypt from 'bcrypt'

export const POST = async (request) => {  // Add request parameter
    try {
        const newUser = await request.json();
        const db = await connectDB();
        const userCollection = db.collection("users");  // Fixed method name
        const exist = await userCollection.findOne({email: newUser.email});
        
        if(exist){
            return Response.json({message: "user exists"}, {status: 304})
        }
        const hashedPassword = bcrypt.hashSync(newUser.password, 14);
        await userCollection.insertOne({...newUser, password:hashedPassword});
        return Response.json({message: "User Created"}, {status: 200})
        
    } catch (error) {
        console.error("Error in POST:", error);  // Add this line to see the actual error
        return Response.json(
            {message: "Something went wrong", error: error.message},  // Include error message
            {status: 500}
        )
    }
}