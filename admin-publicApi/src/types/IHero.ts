/* eslint-disable @typescript-eslint/no-empty-interface */
import { Model, Optional } from 'sequelize/types';

enum Gender {
  man = 'man',
  woman = 'woman',
}

interface IHeroCreate extends Optional<IHero, 'id'> {}

interface IHeroModel
  extends Model<IHero, IHeroCreate>,
    IHero {}

export default interface IHero {
  id: number;
  name: string;
  birthDate: Date;
  country: string;
  gender: Gender;
  avatarImg: string;
}

export { Gender, IHeroCreate, IHeroModel };
