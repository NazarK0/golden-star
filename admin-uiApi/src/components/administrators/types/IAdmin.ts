/* eslint-disable @typescript-eslint/no-empty-interface */
import { Model, Optional } from 'sequelize/types';

enum UserType {
  root = 'root',
  user = 'user'
}

interface IAdminCreate extends Optional<IAdmin, 'id'> {}

interface IAdminModel
  extends Model<IAdmin, IAdminCreate>,
    IAdmin {
  [x: string]: any;
}
export default interface IAdmin {
  id: number;
  email: string;
  name: string;
  birthDate: Date;
  country: string;
  city: string;
  avatarImg: string;
  type?: UserType;
  password?: string;
}

export { IAdminCreate, IAdminModel, UserType };
