import { NextFunction, Request, Response } from "express";

import { verifyToken } from "../utils/jwt-utils";

import {
  invalidated_session,
  missing_access_token,
  unauthorized,
  user_dne,
} from "../errors/authentication.error";

import sessionModel from "../models/session.model";
import UserModel from "../models/user.model";
import createTokens from "../utils/create-tokens";

export default async function authentication(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const accessToken = req.get("authorization")?.split(" ")[1];
  const refreshToken = req.get("x-refresh");

  if (!accessToken) {
    return res.status(401).json({
      error: missing_access_token,
    });
  }

  const { payload: user, expired } = verifyToken(accessToken);

  // check if the access token is valid or not
  // here it is valid
  if (user) {
    res.locals.user = user;
    return next();
  }
  // If flow of control reaches here then => invalid access token
  // If invalid access token and no refresh token then request rejected
  if (!refreshToken) {
    return res.status(401).json({
      error: unauthorized,
    });
  }

  // in the previous case we have just checked if the refresh token exists or not
  // in this we will check if it is valid or not

  const { payload, valid } = verifyToken(refreshToken);

  // if refresh token is valid but access-token is expired / not valid
  if (valid && expired && payload instanceof Object) {
    const uid = payload.uid;
    const sid = payload.sid;

    const session = await sessionModel.findById(sid);

    if (!session || !session.valid) {
      return res.status(401).json({
        error: invalidated_session,
      });
    }

    const user = await UserModel.findById(uid);

    if (!user) {
      return res.status(401).json({
        error: user_dne,
      });
    }

    const to_sign = {
      uid: user._id,
      sid: session._id,
      name: user.name,
    };

    const tokens = createTokens(to_sign);

    res.setHeader("authorization", tokens.access_token);
    res.setHeader("x-refresh", tokens.refresh_token);

    res.locals.user = to_sign;

    return next();
  }

  return res.status(401).json({
    error: unauthorized,
  });
}
