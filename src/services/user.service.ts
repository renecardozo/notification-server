import { UserModel } from '../mongoose';

export const findAllUsers = async () => {
  const users = await UserModel.find().populate(['notifications', 'categories']);
  return users;
}
