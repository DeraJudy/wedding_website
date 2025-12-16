import mongoose from "mongoose";

const MONGODB_URI =
  "mongodb+srv://developer:developer@oziomapov.rtksj4j.mongodb.net/wedding";

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export const connectDB = async () => {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => mongoose);
  }

  cached.conn = await cached.promise;
  console.log("DB Connected");
  return cached.conn;
};
