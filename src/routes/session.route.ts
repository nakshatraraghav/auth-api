import { Router } from "express";

import validateRequest from "../middlewares/validate-requests";
import { sessionRequestSchema } from "../schema/session.schema";
import {
  createSessionHandler,
  getSessionsHandler,
} from "../controllers/session.controller";
import authentication from "../middlewares/authenticate";

const router = Router();

router.post("/", validateRequest(sessionRequestSchema), createSessionHandler);

router.get("/", authentication, getSessionsHandler);

export default router;
