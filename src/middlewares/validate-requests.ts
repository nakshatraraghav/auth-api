import { AnyZodObject } from "zod";
import { Request, Response, NextFunction } from "express";

export default function validateRequest(schema: AnyZodObject) {
  return function (req: Request, res: Response, next: NextFunction) {
    try {
      schema.parse(req.body);
      return next();
    } catch (error: any) {
      if (error.issues instanceof Array) {
        const errs = error.issues.map(
          (err: { message: string }) => err.message
        );

        return res.status(401).json({
          number_of_errors: errs.length,
          errors: errs,
        });
      }
      return res.status(401).json(error);
    }
  };
}
