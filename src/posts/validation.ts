import Joi from "joi";

import type { Request, Response, NextFunction } from "express";

import { validateSchemaMiddleware } from "~/utils";

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
  const validate = validateSchemaMiddleware(createPostSchema);
  validate(req, res, next);
}
