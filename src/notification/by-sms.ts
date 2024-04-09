import { LogNotification } from '../types';
import { LogModel } from '../mongoose/models/log.model';
import { INotificator } from './notificator.interface';

export class SMSNotification implements INotificator {
  async send(data: LogNotification[]): Promise<any> {
    await LogModel.insertMany(data);
  }
}