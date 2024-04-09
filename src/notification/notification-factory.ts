import { INotificator } from './notificator.interface';
import { PushNotification } from './by-push-notification';
import { SMSNotification } from './by-sms';
import { EmailNotification } from './by-email';
import { PUSH_NOTIFICATION, E_MAIL, SMS } from '../config';

export class NotificatorFactory {
  // @ts-ignore
  static create(type: string): INotificator {
    switch (type) {
      case PUSH_NOTIFICATION:
        return new PushNotification();
      case SMS:
        return new SMSNotification();
      case E_MAIL:
        return new EmailNotification();
    }
  }
}