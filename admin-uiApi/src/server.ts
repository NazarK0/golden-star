import { createHttpServer } from './utils/createServer';
import dotenv from 'dotenv';
import app from './app';

dotenv.config();

const { PORT='80' } = process.env;
const port: number = Number.parseInt(PORT);

const appName = 'Admin Panel UI API';

createHttpServer(app, port, appName);
