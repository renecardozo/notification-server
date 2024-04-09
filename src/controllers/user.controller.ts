import { Request, Response } from 'express';
import { findAllUsers } from '../services';

class UserController {
  static async findAllUser (req: Request, res: Response) {
    try {
      const data = await findAllUsers();
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
  UserController
}

