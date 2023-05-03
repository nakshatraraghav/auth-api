import {
  createProduct,
  findProduct,
  deleteProduct,
} from "../services/product.service";

import type {
  createProductBodyType,
  findProductBodyType,
  deleteProductBodyType,
} from "../schema/product.schema";
import type { Request, Response } from "express";
import mongoose, { mongo } from "mongoose";

export async function createProductHandler(
  req: Request<{}, {}, createProductBodyType>,
  res: Response
) {
  try {
    const user = res.locals.user;

    const prod = {
      user: user.uid,
      ...req.body,
    };

    const product = await createProduct(prod);
    return res.json(product);
  } catch (error) {
    res.status(400).json(error);
  }
}

export async function findProductByIdHandler(
  req: Request<{}, {}, findProductBodyType>,
  res: Response
) {
  try {
    const id = new mongoose.Types.ObjectId(req.body.id);
    const product = await findProduct(id);
    return res.json(product);
  } catch (error) {
    res.status(400).json(error);
  }
}

export async function deleteProductHandler(
  req: Request<{}, {}, deleteProductBodyType>,
  res: Response
) {
  const id = new mongoose.Types.ObjectId(req.body.id);
  const success = await deleteProduct({ _id: id });

  if (!success) {
    return res.status(500).send("Delete failed");
  }

  return res.send("Delete succeded");
}
