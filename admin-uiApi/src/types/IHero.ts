/* eslint-disable @typescript-eslint/no-empty-interface */
import { Model, Optional } from 'sequelize/types';

enum Gender {
  man = 'M',
  woman = 'W',
}

interface IHeroCreate extends Optional<IHero, 'id'> {}

interface IHeroModel
  extends Model<IHero, IHeroCreate>,
    IHero {}

type BioType = string | null;
type DeathDateType = Date | null;

export default interface IHero {
  id: number;
  name: string;
  birthDate: Date;
  nominationDate: Date;
  deathDate: DeathDateType;
  gender: Gender;
  isPosthumously: boolean;
  profession: string;
  reason: string;
  avatarImg: string;
  photos: string[];
  bio: BioType;
}

export { Gender, IHeroCreate, IHeroModel, BioType, DeathDateType };
