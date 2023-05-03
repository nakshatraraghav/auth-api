import { Request, Response } from "express";
import { createUser } from "../services/user.service";
import { userRequestBodyType } from "../schema/user.schema";

import { error_response } from "../errors/user.errors";

export async function createUserHandler(
  req: Request<{}, {}, userRequestBodyType>,
  res: Response
) {
  try {
    const user = await createUser(req.body);
    return res.status(201).json(user);
  } catch (error: any) {
    if (error.code === 11000 && error.keyPattern.email) {
      return res
        .status(409)
        .json({ number_of_errors: 1, error: error_response.email_clash });
    }

    return res.json(error.message);
  }
}
