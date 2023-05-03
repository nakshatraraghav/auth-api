import { Router } from "express";

import { createUserHandler } from "../controllers/user.controller";

import hashPasswords from "../middlewares/hash-passwords";
import validateRequest from "../middlewares/validate-requests";
import { userRequestSchema } from "../schema/user.schema";

const router = Router();

router.post(
  "/",
  [validateRequest(userRequestSchema), hashPasswords],
  createUserHandler
);

export default router;
