import crypto from 'crypto';
import IAdmin from '../components/administrators/types/IAdmin';
import db  from '../database';

const generateHash = (password: string) => {
      return crypto.createHash('sha256').update(password).digest('hex');
    };

const createRootUser = async ():Promise<IAdmin> => {
  console.log('CREATE ROOT');
  const user: any = await db.models.Admin.create({
    name: 'SystemUser',
    email: 'root@mail.com',
    birthDate: new Date(1,1,2001),
    type: 'root',
    country: 'Україна',
    city: 'Київ',
    avatarImg: 'defaultAvatar.jpg',
    password: generateHash('1111')
  });

  return user;
};

export default createRootUser;
