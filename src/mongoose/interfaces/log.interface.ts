import mongoose, { Document } from 'mongoose';

export interface ILog extends Document {
  delivered: boolean;
  type_message: string;
  notification: string;
  type_notification: string;
  user: {
    _id: mongoose.Types.ObjectId,
    email: string;
    name: string;
    phone_number: string;
  },
  time: Date
}