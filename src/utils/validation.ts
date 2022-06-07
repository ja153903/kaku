import type { Request, Response, NextFunction } from "express";
import type { ObjectSchema } from "joi";

export function validateSchemaMiddleware(schema: ObjectSchema) {
  return function (req: Request, res: Response, next: NextFunction) {
    const body = req.body;
    const { value, error } = schema.validate(body);
    if (!error) {
      next();
    } else {
      res.status(400).json({
        error: error.details[0].message,
      });
    }
  };
}
