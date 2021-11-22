import passport from "passport";
import local from "../strategies/local";
import db  from '../../../database';
import { Model } from "sequelize/types";

const passportConfig = (): passport.PassportStatic => {
  passport.serializeUser((user: any , done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id: number, done) => {
    db.models.Admin.findByPk(id)
      .then((admin: Model | null) => {
        done(null, admin);
      })
      .catch((error: Error) => {
        done(error, null);
      })
  });

  passport.use(local.name, local.strategy);

  return passport;
};

export default passportConfig;
