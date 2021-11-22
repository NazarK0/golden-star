import { PGStoreOptions } from "connect-pg-simple";

const sessionStoreOptions: PGStoreOptions = {
  tableName: 'AdminSessions',
  createTableIfMissing: true,
  conString: process.env.DB_STR,
  ttl: 8 * 60 * 60 * 1000,
  // errorLog: logger.error,
};

export default sessionStoreOptions;
