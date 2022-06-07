import Joi from "joi";

import type { Request, Response, NextFunction } from "express";

const createPostSchema = Joi.object({
  title: Joi.string().max(255),
  content: Joi.string(),
  category: Joi.string().max(255),
});

export function createPostSchemaValidation(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const body = req.body;
  const { value, error } = createPostSchema.validate(body);
  if (!error) {
    next();
  } else {
    res.status(400).json({
      error: error.details[0].message,
    });
  }
}
