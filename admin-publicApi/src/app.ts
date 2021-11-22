import path from 'path';
import express from 'express';
import initLogger from './utils/initLogger';
import publicApiRouter from "./components/publicApi/publicApi.router";

const app = express();
const logger = initLogger();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', [
  publicApiRouter
]);

export { 
  logger
}

export default app;
