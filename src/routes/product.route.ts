import { Router } from "express";
import {
  createProductHandler,
  deleteProductHandler,
  findProductByIdHandler,
} from "../controllers/product.controller";

import validateReqest from "../middlewares/validate-requests";
import {
  createProductRequestSchema,
  deleteProductRequestSchema,
  findProductRequestSchema,
} from "../schema/product.schema";

import authenticate from "../middlewares/authenticate";

const router = Router();

router.post(
  "/",
  [authenticate, validateReqest(createProductRequestSchema)],
  createProductHandler
);

router.get(
  "/",
  [authenticate, validateReqest(findProductRequestSchema)],
  findProductByIdHandler
);

router.delete(
  "/",
  [authenticate, validateReqest(deleteProductRequestSchema)],
  deleteProductHandler
);

export default router;
