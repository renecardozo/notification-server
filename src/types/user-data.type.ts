import { Schema } from 'mongoose';

type item = {
  _id: Schema.Types.ObjectId,
  name: string;
}

export type UserData = {
  _id: item[],
  users: [{
    _id: Schema.Types.ObjectId,
    email: string,
    name: string,
    phone_number: string,
    populatedCategories: item[]
    populatedNotifications: item[]
  }]
}