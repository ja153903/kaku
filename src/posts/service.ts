import { prisma } from "~/db";
import type { CreatePost, UpdatePost } from "./types";

async function getPostById(id: number) {
  return await prisma.post.findUnique({
    where: { id },
  });
}

async function createPost(post: CreatePost) {
  return await prisma.post.create({
    data: post,
  });
}

async function updatePost(id: number, post: UpdatePost) {
  return await prisma.post.update({
    where: { id },
    data: post,
  });
}

export { getPostById, createPost, updatePost };
