import mongoose from 'mongoose';
import { CategoryModel, NotificationModel, UserModel } from '../mongoose';

export const createCategories = async () => {
  const categories = [
    {
      name: 'Sports',
    },
    {
      name: 'Finance',
    },
    {
      name: 'Movies',
    }
  ]
  await CategoryModel.insertMany(categories);
  console.log('CATEGORIES CREATED');
}

export const createNotification = async () => {
  const notifications = [
    {
      name: 'SMS',
    },
    {
      name: 'E-Mail',
    },
    {
      name: 'Push Notification',
    }
  ];
  await NotificationModel.insertMany(notifications);
  console.log('NOTIFICATIONS CREATED!');
}

export const createUsers = async () => {
  // Categories
  const categoriesList = await CategoryModel.find({});

  // Notifications
  const notificationlist = await NotificationModel.find({});

  const users = [
    {
      name: 'Jhon Doe',
      email: 'jhon.doe@email.com',
      phone_number: '(+1) 781-957-7254',
      categories: [categoriesList[0]._id, categoriesList[1]._id],
      notifications: [notificationlist[0]._id]
    },
    {
      name: 'Peter Rabbit',
      email: 'peter.rabbit@email.com',
      phone_number: '(+1) 781-957-7254',
      categories: [categoriesList[1]._id, categoriesList[2]._id],
      notifications: [notificationlist[1]._id]
    },
    {
      name: 'Pepe Lucho',
      email: 'pepe.lucho@email.com',
      phone_number: '(+1) 781-957-7254',
      categories: [categoriesList[0]._id, categoriesList[2]._id],
      notifications: [notificationlist[2]._id]
    },
    {
      name: 'Smith Johnson',
      email: 'smith.johnson@email.com',
      phone_number: '(+1) 781-957-7254',
      categories: [categoriesList[0]._id, categoriesList[1]._id],
      notifications: [notificationlist[0]._id, notificationlist[1]._id, notificationlist[2]._id]
    }
  ]
  await UserModel.insertMany(users);
  console.log('USERS CREATED');
}

export const initData = async () => {
  try {
    console.log('++++++++ STARTED CREATION OF DATA +++++++++++++++');
    await createCategories();
    await createNotification();
    await createUsers();
    console.log('++++++++ FINISHED CREATION OF DATA +++++++++++++++');
  } catch (error) {
    throw error;
  }
}