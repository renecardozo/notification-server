import mongoose, { HydratedDocument, Schema } from 'mongoose';
import { ICategory } from '../mongoose/interfaces';
import { CategoryModel, UserModel } from '../mongoose';
import { E_MAIL, PUSH_NOTIFICATION, SMS } from '../config';
import { NotificatorFactory } from './notification-factory';
import { SMSNotification } from './by-sms';
import { LogNotification, UserData } from '../types';

class NotificationManager {
  category: HydratedDocument<ICategory> | null = null;
  constructor() {
  }
  async check(category: string) {
    this.category = await CategoryModel.findById(category);
    if (!this.category) {
      throw new Error('Not exist the category');
    }
  }
  async send(message: string) {
    const response = await UserModel.aggregate([
      { $match: { 'categories': this.category!._id} },
      { $unwind: '$notifications' },
      {
        $lookup: {
          from: 'categories',
          localField: 'categories',
          foreignField: '_id',
          as: 'populatedCategories'
        }
      },
      {
        $lookup: {
          from: 'notifications',
          localField: 'notifications',
          foreignField: '_id',
          as: 'populatedNotifications'
        }
      },
      {
        $project: {
          name: 1,
          email: 1,
          phone_number: 1,
          populatedCategories: 1,
          populatedNotifications: 1
        }
      },
      {
          $group: {
              _id: '$populatedNotifications',
              users: { $push: '$$ROOT' }
          }
      }
    ]);
    for(let data of response) {
      const { _id } = data;
      const type = _id[0].name;
      if (type === PUSH_NOTIFICATION) {
        await NotificatorFactory.create(PUSH_NOTIFICATION).send(this.createMessage(message, data));
      } else if (type === SMS) {
        await NotificatorFactory.create(SMS).send(this.createMessage(message, data));
      } else if (type === E_MAIL) {
        await NotificatorFactory.create(E_MAIL).send(this.createMessage(message, data));
      }
    }
  }

  createMessage(message: string, userData: UserData): LogNotification[] {
    const dataList = userData.users.map(data => {
      return {
        delivered: true,
        category: data.populatedCategories.map(notif => notif.name),
        notification: userData._id[0].name,
        user: {
          _id: data._id.toString(),
          email: data.email,
          name: data.name,
          phone_number: data.phone_number,
        },
        time: new Date(),
        message,
      }
    });
    return dataList;
  }

}
const  notificatorManager = new NotificationManager();
export { notificatorManager }