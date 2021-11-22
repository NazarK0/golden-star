import express from 'express';
import * as controller from './administrators.controller';

const administratorsRouter = express.Router();

administratorsRouter.get('/', controller.getDefaultPage);
administratorsRouter.get('/admin-user/list', controller.getList);
administratorsRouter.route('/admin-user/create')
  .get(controller.getList)
  .post(controller.postCreate);
administratorsRouter.route('/admin-user/edit/:id')
  .get(controller.getEdit)
  .post(controller.postEdit);
administratorsRouter.delete('/admin-user/delete/:id', controller.deleteItem);

export default administratorsRouter;
