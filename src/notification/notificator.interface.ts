import { LogNotification } from "../types";

export interface INotificator {
  send(data: LogNotification[]): Promise<any>;
}
