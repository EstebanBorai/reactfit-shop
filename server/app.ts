import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import routes from './routes';

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(morgan('combined'));

app.use(routes);

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Running ${process.env.PROJECT_NAME} server at http://localhost:${process.env.SERVER_PORT}`);
});
