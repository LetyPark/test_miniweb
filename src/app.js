import express from "express";
import postsRouter from "./routes/posts.router.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/api", [postsRouter]);

app.listen(PORT, () => {
  console.log(PORT, "포트로 서버가 열렸어요!");
});
