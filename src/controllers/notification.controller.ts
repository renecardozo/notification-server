import { Request, Response } from 'express';
import { sendNotification } from '../services';
import { CategoryModel } from '../mongoose';
import { LogModel } from '../mongoose/models/log.model';

class NotificationController {
  static async send (req: Request, res: Response) {
    try {
      const { message, category } = req.body;
      const data = await sendNotification(message, category);
      return res.status(200).send({
        error: null,
        data
      })
    } catch (error) {
      console.log(error);
      return res.status(500).send({
        error: error,
        data: []
      })
    }
  }
  static async getAllCategories(req: Request, res: Response) {
    try {
      const data = await CategoryModel.find();
      return res.status(200).send({
        error: null,
        data
      })
    } catch (error) {
      console.log(error);
      return res.status(500).send({
        error: error,
        data: []
      })
    }
  }

  static async getAll(req: Request, res: Response) {
    try {
      const data = await LogModel.find().sort({'time': -1});
      return res.status(200).send({
        error: null,
        data
      })
    } catch (error) {
      console.log(error);
      return res.status(500).send({
        error: error,
        data: []
      })
    }
  }
}

export {
  NotificationController
}

