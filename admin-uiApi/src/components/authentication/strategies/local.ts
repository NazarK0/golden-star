import crypto from 'crypto';
import { Request } from 'express';
import { Strategy as LocalStrategy, VerifyFunctionWithRequest } from 'passport-local';
import db  from '../../../database';

const verify:VerifyFunctionWithRequest = (req: Request, email: string, password: string, done) => {
    const generateHash = (password: string) => {
      return crypto.createHash('sha256').update(password).digest('hex');
    };

    console.log(req, 'REQ')
    console.log(email, 'MAIL')

    db.models.Admin.findOne({ where: { email }})
      .then((user: any) => {
            if (!user) { return done(null, false); }
            if (user.password !== generateHash(password)) { return done(null, false); }
            return done(null, user);
          })
      .catch((error) => done(error));
  }

  const strategy = new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
  }, verify);

export = {
  name: "local",
  strategy,
};
