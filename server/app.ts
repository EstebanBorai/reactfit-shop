import express from "express";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Running ${process.env.PROJECT_NAME} server at http://localhost:${process.env.SERVER_PORT}`);
});
