export type LogNotification = {
  delivered: boolean;
  category: string[];
  notification: string;
  user: {
    _id: string,
    email: string;
    name: string;
    phone_number: string;
  },
  time: Date,
  message: string;
}