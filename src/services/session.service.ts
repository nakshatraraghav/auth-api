import mongoose from "mongoose";
import sessionModel from "../models/session.model";

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
