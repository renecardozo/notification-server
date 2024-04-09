import mongoose, { Document, Schema } from 'mongoose';
import { ICategory } from './category.interface';
import { INotification } from './notification.interface';

export interface IUser extends Document {
  name: string;
  email: string;
  phone_number: string;
  subscribed: [{
    type: mongoose.Types.ObjectId[] | ICategory[]
  }];
  channels: [{
    type: mongoose.Types.ObjectId[] | INotification[]
  }];
}
