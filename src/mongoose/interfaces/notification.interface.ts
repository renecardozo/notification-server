import { Schema, Document } from 'mongoose';

export interface INotification extends Document {
  name: string;
}
