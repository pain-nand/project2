import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connectDb = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`mongodb is connected ${connectDb.connection.host}`)
    }
    catch (error) {
        console.log(error)
    }
}

export default connectDB