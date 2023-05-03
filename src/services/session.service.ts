import mongoose, { FilterQuery, UpdateQuery } from "mongoose";
import sessionModel, { sessionDocument } from "../models/session.model";

export async function createSession(
  user_id: mongoose.Types.ObjectId,
  userAgent: string
) {
  try {
    const session = await sessionModel.create({
      user: user_id,
      userAgent,
    });

    return session.toJSON();
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function getSessions(query: FilterQuery<sessionDocument>) {
  return await sessionModel.find(query);
}

export async function updateSession(
  query: FilterQuery<sessionDocument>,
  updateQuery: UpdateQuery<sessionDocument>
) {
  try {
    const session = await sessionModel.findByIdAndUpdate(query, updateQuery);
    return true;
  } catch (error) {
    return false;
  }
}
