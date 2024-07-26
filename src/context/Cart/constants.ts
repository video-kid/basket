import type { product } from '../../types/product';
import type { cartContextProps } from './types';

export const defaultValues: cartContextProps = {
  cart: [],
  addToCart: (item: product) => null,
  removeFromCart: (id: number) => null,
  sumOfCartItems: 0,
  cartPrice: 0,
};
