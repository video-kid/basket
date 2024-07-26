import { product } from './product';

export type cartItem = product & {
  quantity: number;
};
