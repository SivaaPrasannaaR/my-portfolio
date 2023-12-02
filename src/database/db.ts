import mongoose, { ConnectOptions } from "mongoose"

async function connectToDatabase() {
  try {
    const MONGO_URI =
      "mongodb+srv://admin:admin@mycluster.kv83ztc.mongodb.net/testDB?retryWrites=true&w=majority"

    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions)
    console.log("Connected to MongoDB")
  } catch (error) {
    console.error("Error connecting to MongoDB:", error)
  }
}

export default connectToDatabase
