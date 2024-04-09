import { INotificator } from './notificator.interface';
import { LogModel } from '../mongoose/models/log.model';
import { LogNotification } from '../types';

export class EmailNotification implements INotificator {
  async send(data: LogNotification[]): Promise<any> {
    await LogModel.insertMany(data);
  }
}