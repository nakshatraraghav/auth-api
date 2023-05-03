import { Request, Response } from "express";
import { sessionRequestBodyType } from "../schema/session.schema";

import { findUser, comparePasswords } from "../services/user.service";

import {
  invalid_email_password,
  session_creation_error,
} from "../errors/session.errors";
import { createSession } from "../services/session.service";

import createTokens from "../utils/create-tokens";

export async function createSessionHandler(
  req: Request<{}, {}, sessionRequestBodyType>,
  res: Response
) {
  // Step 1: Check if the user exists or not
  const user = await findUser({ email: req.body.email });

  if (!user) {
    return res.status(401).json({
      error: invalid_email_password,
    });
  }
  // If the flow of control reaches here => that user exists
  // Now check the password

  const isValid = comparePasswords(req.body.password, user.password);

  if (!isValid) {
    return res.status(401).json({
      error: invalid_email_password,
    });
  }

  // Step 3: Create the session
  const userAgent = req.get("User-Agent") || "";
  const session = await createSession(user._id, userAgent);
  if (!session) {
    return res.status(500).json({
      error: session_creation_error,
    });
  }
  // Session created

  // Step 4: Create the access and refresh tokens
  const to_sign = {
    uid: user._id,
    sid: session._id,
    name: user.name,
  };
  const tokens = createTokens(to_sign);

  // Step 5: Return the tokens to the user
  res.setHeader("authorization", tokens.access_token);
  res.setHeader("x-refresh", tokens.refresh_token);

  return res.status(200).json(tokens);
}
