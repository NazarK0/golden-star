import http from 'http';
import db from '../database';
import { logger } from '../app';
import { Application } from 'express';

const createHttpServer = (app: Application, port: number, appName=''): void => {
  const httpMessage = () => {
    logger.info(`${appName}(HTTP) has been started on port ${port}`);
  };

  const httpServer = http.createServer(app);
  db.sync({ force: false }).then(() => {
    httpServer.listen(port, httpMessage);
  });
}

export {
  createHttpServer,
}