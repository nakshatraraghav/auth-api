import { Router } from "express";

import validateRequest from "../middlewares/validate-requests";
import { sessionRequestSchema } from "../schema/session.schema";
import { createSessionHandler } from "../controllers/session.controller";

const router = Router();

router.post("/", validateRequest(sessionRequestSchema), createSessionHandler);

export default router;
