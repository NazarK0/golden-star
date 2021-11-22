import session, { SessionOptions } from "express-session"
import pgSession from 'connect-pg-simple'
import sessionStoreOptions from "./session-store-config";

const pgs = new (pgSession((session)))(sessionStoreOptions);

const sessionOptions = (): SessionOptions => {
  return {
    secret: '19bb3d42-b23f-4d60-a853-4e774ba468ad',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 8 * 60 * 60 * 1000 }, // 8hours
    store: pgs,
  };
};

export default sessionOptions;
