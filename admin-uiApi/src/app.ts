import path from 'path';
import express from 'express';
import initLogger from './utils/initLogger';
import authentication from './components/authentication';
import authenticationMiddleware from './components/authentication/middleware';
import authRouter from './components/authentication/router';
import administratorsRouter from './components/administrators/administrators.router';

const app = express();
const logger = initLogger();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

authentication(app);

app.use('/', [
  authRouter,
]);
app.use('/admin', authenticationMiddleware, [
  administratorsRouter,
]);

app.get('*', (req, res) => {
  res.render('404');
});

app.set('views', './src/ui/views/pages')
app.set('view engine', 'pug')

export { 
  logger
}

export default app;
