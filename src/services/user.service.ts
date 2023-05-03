import { FilterQuery } from "mongoose";
import UserModel, { userDocument } from "../models/user.model";
import { userRequestBodyType } from "../schema/user.schema";

import bcrypt from "bcrypt";

export async function createUser(input: userRequestBodyType) {
  try {
    const user = UserModel.create(input);
    const { password, ...user_details } = (await user).toJSON();
    return user_details;
  } catch (error: any) {
    throw error;
  }
}

export async function findUser(query: FilterQuery<userDocument>) {
  const user = await UserModel.findOne(query);

  if (!user) {
    return false;
  }

  return user.toJSON();
}

export async function comparePasswords(candidate: string, hash: string) {
  const valid = await bcrypt.compare(candidate, hash);
  return valid;
}
