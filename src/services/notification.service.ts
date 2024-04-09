import { notificatorManager } from '../notification';

export const sendNotification = async (message: string, category: string) => {
  await notificatorManager.check(category);
  await notificatorManager.send(message);
}