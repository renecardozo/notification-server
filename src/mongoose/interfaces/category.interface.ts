import mongoose, {Schema, Document } from 'mongoose';

export interface ICategory extends Document {
  name: string;
}