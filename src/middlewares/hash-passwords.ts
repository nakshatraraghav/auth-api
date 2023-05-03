import { Request, Response, NextFunction } from "express";
import { userRequestBodyType } from "../schema/user.schema";

import bcrypt from "bcrypt";

const SALT_FACTOR = parseInt(process.env.SALT_FACTOR as string);

export default async function hashPasswords(
  req: Request<{}, {}, userRequestBodyType>,
  res: Response,
  next: NextFunction
) {
  const password = req.body.password;

  const salt = await bcrypt.genSalt(SALT_FACTOR);
  const hashed = await bcrypt.hash(password, salt);

  req.body.password = hashed;

  return next();
}
