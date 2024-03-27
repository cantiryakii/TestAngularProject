import { User } from './user.interface';

export class Product implements User {
  constructor(public id: number, public name: string, public email: string) {}
}