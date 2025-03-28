import { connectDB } from "@/lib/connectDB";

export const POST = async (request) => {  // Add request parameter
    try {
        const newUser = await request.json();
        const db = await connectDB();
        const userCollection = db.collection("users");  // Fixed method name
        const exist = await userCollection.findOne({email: newUser.email});
        
        if(exist){
            return Response.json({message: "user exists"}, {status: 304})
        }
        
        await userCollection.insertOne(newUser);
        return Response.json({message: "User Created"}, {status: 200})
        
    } catch (error) {
        console.error("Error in POST:", error);  // Add this line to see the actual error
        return Response.json(
            {message: "Something went wrong", error: error.message},  // Include error message
            {status: 500}
        )
    }
}