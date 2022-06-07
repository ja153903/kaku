import express from "express";

import service from "./service";
import { createPostSchemaValidation } from "./validation";

const router = express.Router();

router.get("/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const post = await service.getPostById(id);

  if (!post) {
    res.status(400).json({
      error: `Could not find post with id: ${id}`,
    });
  } else {
    res.status(200).json({
      data: post,
    });
  }
});

router.post("/", createPostSchemaValidation, async (req, res) => {
  const body = req.body;
  const post = await service.createPost(body);

  if (!post) {
    res.status(400).json({
      error: `Something went wrong`,
    });
  } else {
    res.status(200).json({
      data: post,
    });
  }
});

export { router };
