import mongoose  from "mongoose";



const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log("DB connected");
        
    } catch (error) {
        throw new Error("DB connection error :"+error)
    }
}
export default connectDB