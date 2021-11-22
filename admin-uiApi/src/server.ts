import { createHttpServer, createHttpsServer } from './utils/createServer';
import dotenv from 'dotenv';
import app, { logger } from './app';

dotenv.config();

const { PORT='80', S_PORT='443' } = process.env;
const port: number = Number.parseInt(PORT);
const securePort: number = Number.parseInt(S_PORT);

const httpsEnabled = process.env.HTTPS === 'on';
const appName = 'Admin Panel';

if (httpsEnabled) {
  try {
    createHttpsServer(securePort, appName);
  } catch (e) {
    logger.error(e);
    logger.warn('No certificate files found for SSL. The server is running on HTTP');
    createHttpServer(app, port, appName);
  }
} else {
  createHttpServer(app, port, appName);
}
