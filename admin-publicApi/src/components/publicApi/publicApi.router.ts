import express from 'express';
import * as controller from './publicApi.controller';

const publicApiRouter = express.Router();

publicApiRouter.get('/api/list-of-heroes', controller.getListOfHeroes);

export default publicApiRouter;
