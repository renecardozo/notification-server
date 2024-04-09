import mongoose, { Schema } from 'mongoose';
import { INotification } from '../interfaces';

const NotificationSchema: Schema = new Schema({
  name: {
    type: String,
    required: true
  }
});

export const NotificationModel = mongoose.model<INotification>('notifications', NotificationSchema);