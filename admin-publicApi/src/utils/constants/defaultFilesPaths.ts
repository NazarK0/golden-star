import path from 'path';

const defaultInstancesFolderPath = path.join(__dirname, '../..', 'defaultInstances');
const defaultImagesPath = path.join(defaultInstancesFolderPath, 'images');

export = {
  defaultInstancesFolderPath,
  defaultImagesPath,
}
