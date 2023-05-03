import { Router } from "express";

import validateRequest from "../middlewares/validate-requests";
import { sessionRequestSchema } from "../schema/session.schema";
import {
  createSessionHandler,
  getSessionsHandler,
  invalidateSessionHandler,
} from "../controllers/session.controller";
import authentication from "../middlewares/authenticate";

const router = Router();

router.post("/", validateRequest(sessionRequestSchema), createSessionHandler);

router.get("/", authentication, getSessionsHandler);

router.delete("/", authentication, invalidateSessionHandler);

export default router;
