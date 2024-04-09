import { Router } from 'express';

import { NotificationController } from '../controllers';

export const initNotificationsRoutes = (router: Router) => {
  // Notification API
  router.post('/notifications', NotificationController.send);
  router.get('/notifications', NotificationController.getAll);
  router.get('/categories', NotificationController.getAllCategories);
}
