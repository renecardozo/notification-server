import bodyParser from 'body-parser';
import cors from 'cors';
import express, { Express, Router } from 'express';
import { connectToDB } from './mongoose';
import { initData } from './services';
import { initUserRoutes, initNotificationsRoutes } from './routes';
import { Request, Response } from 'express';
const router = Router();
(
  async function(){
    await connectToDB();
    const app: Express = express();
    const PORT = process.env.PORT || 3001;
    app.use(bodyParser.json());
    app.use(cors({origin:'*'}));
    app.use('/health-check', (req: Request, res: Response) => {
      res.status(200).send("Server is running");
    });
    initUserRoutes(router);
    initNotificationsRoutes(router);
    app.use('/api', router);
    // uncommented this method to fill the data in mongodb
    // await initData();
    app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
  }
)();