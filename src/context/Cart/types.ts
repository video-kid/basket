import type { cartItem } from '../../types/cart';
import type { product } from '../../types/product';

export type cartContextProps = {
  cart: Array<cartItem>;
  addToCart: (item: product) => void;
  removeFromCart: (id: number) => void;
  sumOfCartItems: number;
  cartPrice: number;
};
