import express from "express";

import { getPostById, createPost, updatePost } from "./service";
import { createPostSchemaValidation } from "./validation";
import type { UpdatePost } from "./types";

const router = express.Router();

router.get("/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const post = await getPostById(id);

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

router.put("/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const data = req.body as UpdatePost;

  const updatedPost = await updatePost(id, data);

  if (!updatedPost) {
    res.status(400).json({
      error: `Could not update post with id: ${id}`,
    });
  } else {
    res.status(200).json({
      data: updatedPost,
    });
  }
});

router.post("/", createPostSchemaValidation, async (req, res) => {
  const body = req.body;
  const post = await createPost(body);

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
