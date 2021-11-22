import session from "express-session";
import sessionOptions from "./config/session-config";
import configPassport from "./config/passport-config";
import { Application } from "express";

const authentication = (app: Application): void => {
  const passport = configPassport();

  app.use(session(sessionOptions()));
  app.use(passport.initialize());
  app.use(passport.session());
};

export default  authentication;
