import { DataTypes, Sequelize } from 'sequelize'
import { IAdminModel } from '../../components/administrators/types/IAdmin';

const Admin = (db: Sequelize): void => {
  db.define<IAdminModel>('Admin', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    email: {
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
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    avatarImg: {
      type: DataTypes.STRING,
    },
    type: {
      type: DataTypes.ENUM,
      allowNull: false,
      values: ['root', 'user'],
      defaultValue: 'user'
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, { 
    tableName: 'Administrators'
  });
}

export default Admin;
