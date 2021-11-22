import path from 'path';

const { DATA_PATH ='' } = process.env;

const uploadsFolderPath = path.join(DATA_PATH, 'uploads');
const logsFolderPath = path.join(DATA_PATH, 'logs');
const sslFolderPath = path.join(DATA_PATH, '.ssl');
const tmpFolderPath = path.join(uploadsFolderPath, 'temp');
const filesFolderPath = path.join(uploadsFolderPath, 'files');

export = {
  tmpFolderPath,
  filesFolderPath,
  logsFolderPath,
  sslFolderPath,
};
