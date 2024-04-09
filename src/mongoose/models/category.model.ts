import mongoose, { Schema } from 'mongoose';
import { ICategory } from '../interfaces';

const CategorySchema: Schema = new Schema({
  name: {
    type: String,
    required: true
  }
});

export const CategoryModel =  mongoose.model<ICategory>('categories', CategorySchema);