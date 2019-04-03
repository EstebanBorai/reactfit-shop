import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import routes from './routes';

dotenv.config();

const app = express();

app.use(cors())
app.use(bodyParser.json());
app.use(morgan('combined'));

app.use(routes);

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Running ${process.env.PROJECT_NAME} server at http://localhost:${process.env.SERVER_PORT}`);
});
