import { AnyZodObject } from "zod";
import { Request, Response, NextFunction } from "express";

export default function validateRequest(schema: AnyZodObject) {
  return function (req: Request, res: Response, next: NextFunction) {
    try {
      schema.parse(req.body);
      return next();
    } catch (error: any) {
      console.log(error);
      return res.status(401).json(error);
    }
  };
}
