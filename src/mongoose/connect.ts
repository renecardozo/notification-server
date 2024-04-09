import mongoose from 'mongoose';
const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost:27017/notification_db';

export const connectToDB = async () => {
  try {
    await mongoose.connect(MONGODB_URL);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error(error);
    throw error;
  }
}
