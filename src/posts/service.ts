import { prisma } from "~/db";
import type { CreatePost } from "./types";

class PostService {
  static async getPostById(id: number) {
    return await prisma.post.findUnique({
      where: { id },
    });
  }

  static async createPost(post: CreatePost) {
    return await prisma.post.create({
      data: post,
    });
  }
}

export default PostService;
