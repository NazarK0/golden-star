import { DataTypes, Sequelize } from 'sequelize'
import { IAppUserModel } from '../../../types/IHero';

const AppUser = (db: Sequelize): void => {
  db.define<IAppUserModel>('AppUser', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    authType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    birthDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    coordinates: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    gender: {
      type: DataTypes.ENUM,
      allowNull: false,
      values: ['man', 'woman'],
      defaultValue: 'man'
    },
    avatarImg: {
      type: DataTypes.STRING,
    },
    balance: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0.0
    },
  }, { 
    tableName: 'AppUsers'
  });
}

export default AppUser;
