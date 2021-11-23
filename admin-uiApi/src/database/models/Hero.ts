import { DataTypes, Sequelize } from "sequelize";
import { IHeroModel } from "../../types/IHero";

const Hero = (db: Sequelize): void => {
  db.define<IHeroModel>(
    "Hero",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      birthDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      gender: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: ["man", "woman"],
        defaultValue: "man",
      },
      avatarImg: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: "Heroes",
    }
  );
};

export default Hero;
