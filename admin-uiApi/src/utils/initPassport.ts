
import crypto from 'crypto';
import passport from 'passport';
import session  from 'express-session';
import pgSession from 'connect-pg-simple'
import { Application, Request } from 'express';
import { Strategy as LocalStrategy } from 'passport-local';
import { logger } from "../app";
import db  from '../database';

const initPassport = (app: Application): void => {
  logger.info('init Passport js');

  const pgs = new (pgSession((session)))({
    tableName: 'admin_sessions',
    conString: process.env.DB_STR,
    ttl: 8 * 60 * 60 * 1000,
    // errorLog: logger.error,
  });

  app.use(session({ 
    secret: '19bb3d42-b23f-4d60-a853-4e774ba468ad',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 8 * 60 * 60 * 1000 }, // 8hours
    store: pgs,
  }));

  passport.use('local', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
  }, (req: Request, email: string, password: string, done: any) => {
    const generateHash = (password: string) => {
      return crypto.createHash('sha256').update(password).digest('hex');
    };

    db.models.Admin.findOne({ where: { email }})
      .then((user: any) => {
        if(user) {
          return done(null,false, { message: 'That email is already taken' });
        } else {
          const userPassword = generateHash(password);
          const data = { 
            email,
            password: userPassword,
            name: req.body.name
          };

          db.models.Admin.create(data)
          .then((newUser : any) => {
            if (!newUser) {
              return done(null, false);
            }
            if (newUser) {
              return done(null, newUser);
            }
          })
        }
      })
  }));
  
  app.use(passport.initialize());
  app.use(passport.session()); 
}

export default initPassport;
