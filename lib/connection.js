import mongoose from "mongoose";

const connectDB = async () => {
  const MONGODB_URI = process.env.MONGODB_URI;
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to Database certBuilder");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
