import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import userRouter from "./router/user.router";
import candidateRouter from "./router/candidate.router";
import voteRouter from "./router/vote.router";
const app = express();
const port = 8001;
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  return res.status(200).json({
    message: "Server is running...",
  });
});

mongoose
  .connect("mongodb://localhost:27017/voting")
  .then(() => console.log("DB connected!"));

app.listen(port, () => {
  console.log("Server listening on port: " + port);
});

app.use("/api/", userRouter);
app.use("/api/", candidateRouter);
app.use("/api/", voteRouter);
