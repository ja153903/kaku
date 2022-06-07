// NOTE: Let's load at the very top!
import dotenv from "dotenv";
dotenv.config();

import express from "express";

import { postRouter } from "./posts";

const app = express();

app.use(express.json());
app.use("/api/post", postRouter);

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`);
});
