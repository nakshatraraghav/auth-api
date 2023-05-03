import mongoose from "mongoose";
import UserModel from "../models/user.model";
import { userRequestBodyType } from "../schema/user.schema";

export async function createUser(input: userRequestBodyType) {
  try {
    const user = UserModel.create(input);
    const { password, ...user_details } = (await user).toJSON();
    return user_details;
  } catch (error: any) {
    throw error;
  }
}
