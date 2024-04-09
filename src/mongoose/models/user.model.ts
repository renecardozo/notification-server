import mongoose, { Schema } from 'mongoose';
import { IUser } from '../interfaces';

const UserSchema: Schema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  phone_number: {
    type: String
  },
  categories: [{
    type: Schema.Types.ObjectId, ref: 'categories'
  }],
  notifications: [{
    type: Schema.Types.ObjectId, ref: 'notifications'
  }]
});

export const UserModel = mongoose.model<IUser>('users', UserSchema);