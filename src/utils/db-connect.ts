import mongoose from "mongoose";

export default async function connect(connection_string: string) {
  try {
    await mongoose.connect(connection_string);
    console.log("server connected to database");
  } catch (error) {
    console.log("server failed to connect to database");
    console.log(error);
  }
}
