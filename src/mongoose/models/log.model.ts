import mongoose, { Schema } from 'mongoose';
import { ILog } from '../interfaces/log.interface';

const LogSchema: Schema = new Schema({
  delivered: {
    type: Boolean
  },
  category: {
    type: [String]
  },
  notification: {
    type: String
  },
  user: {
    _id: mongoose.Types.ObjectId,
    email: {
      type: String
    },
    name: {
      type: String
    },
    phone_number: {
      type: String
    }
  },
  time: Date,
  message: String
});

export const LogModel = mongoose.model<ILog>('logs', LogSchema);