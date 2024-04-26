import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost/app");
    console.log("MongoDB is connected");
  } catch (error) {
    console.error(error);
  }
};

export default connectDB;