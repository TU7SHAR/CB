import mongoose from "mongoose";

const connectDB = async () => {
  const MONGODB_URI =
    process.env.MONGODB_URI ||
    "mongodb+srv://gautamtushar00011:test@cluster0.e2rne.mongodb.net/certBuilder?retryWrites=true&w=majority&appName=Cluster0";
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to Database certBuilder");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
