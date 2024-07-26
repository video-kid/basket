import { createContext, ReactNode, useState } from 'react';
import type { product } from '../../types/product';
import type { cartItem } from '../../types/cart';
import type { cartContextProps } from './types';
import { defaultValues } from './constants';
import { add, remove } from './actions';

const CartContext = createContext<cartContextProps>(defaultValues);

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, updateCart] = useState<Array<cartItem>>([]);

  const removeFromCart = (id: number) => {
    return updateCart(remove(id, cart));
  };

  const addToCart = (item: product) => {
    return updateCart(add(item, cart));
  };

  const sumOfCartItems: number = cart.reduce(
    (acc, item: cartItem) => acc + item.quantity,
    0
  );

  const cartPrice: number = cart.reduce(
    (acc, item: cartItem) => acc + item.quantity * item.price,
    0
  );

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, sumOfCartItems, cartPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
