import { Sequelize } from 'sequelize';
import { logger } from '../app';
import applyExtraSetup from './config/extra-setup';

import Hero from './models/Heroes';

const modelDefiners = [Hero];

const { DB_STR = '' } = process.env;
const sequelize = new Sequelize(DB_STR, {
  logging: (msg) => logger.debug(msg),
  logQueryParameters: true,
  benchmark: true,
});

sequelize
  .authenticate()
  .then(() => logger.info('Connection has been established successfully.'))
  .catch((error) => {
    logger.error(`Unable to connect to the database: ${error.message}`);
  });

for (const modelDefiner of modelDefiners) {
  modelDefiner(sequelize);
}

applyExtraSetup(sequelize);

export default sequelize;
