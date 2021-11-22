import express, { Request, Response } from 'express';
import passport from 'passport';
import * as controller from './controller';

const authRouter = express.Router();

const authenticate = passport.authenticate(["local"], {
  session: true,
});

const mustAuthenticated = (req: Request, res: Response, next: ()=>void) => {
  if (!req.isAuthenticated()) {
    return res.status(401).redirect('/login');
  }
  next();
};

authRouter.route("/login")
  .get(controller.getLoginPage)
  .post(authenticate, controller.postLoginForm);
// authRouter.route("/signup").get(controller.getSignUp).post(controller.postSignUp);
authRouter.post("/logout", mustAuthenticated, controller.postLogout);

export default authRouter;
