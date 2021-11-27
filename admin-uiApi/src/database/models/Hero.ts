import { DataTypes, Sequelize } from "sequelize";
import { IHeroModel } from "../../types/IHero";

const Hero = (db: Sequelize): void => {
  db.define<IHeroModel>(
    "Hero",
    {
      id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
      name: { type: DataTypes.STRING, allowNull: false },
      birthDate: { type: DataTypes.DATEONLY, allowNull: false, defaultValue: DataTypes.NOW },
      nominationDate: { type: DataTypes.DATEONLY, allowNull: false, defaultValue: DataTypes.NOW },
      deathDate: { type: DataTypes.DATEONLY, allowNull: true, defaultValue: null },
      gender: { type: DataTypes.ENUM, allowNull: false, values: ["M", "W"], defaultValue: "M" },
      isPosthumously: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
      profession: { type: DataTypes.STRING, allowNull: false, defaultValue: "Не встановлено" },
      reason: { type: DataTypes.STRING, allowNull: false, defaultValue: "Не встановлено" },
      avatarImg: { type: DataTypes.STRING },
      bio: { type: DataTypes.STRING, allowNull: true },
    },
    { tableName: "Heroes" }
  );
};

export default Hero;
