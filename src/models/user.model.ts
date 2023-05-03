import mongoose from "mongoose";

export interface userDocument {
  name: string;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
}

const userSchema = new mongoose.Schema<userDocument>(
  {
    name: {
      required: true,
      type: String,
    },
    email: {
      required: true,
      unique: true,
      type: String,
    },
    password: {
      required: true,
      type: String,
    },
  },
  { timestamps: true }
);

const UserModel = mongoose.model("users", userSchema);
export default UserModel;
