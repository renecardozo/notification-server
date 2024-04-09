import { Router } from 'express';
import { UserController } from '../controllers';

export const initUserRoutes = (router: Router) => {
  // User API
  router.get('/users', UserController.findAllUser);
}
