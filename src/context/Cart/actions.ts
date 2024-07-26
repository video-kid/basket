import { cartItem } from '../../types/cart';
import { product } from '../../types/product';

export const add = (item: product, cart: cartItem[]) => {
  const itemToUpdate = cart.find((cartItem) => cartItem.id === item.id);

  return itemToUpdate
    ? [
        ...cart.filter((cartItem) => cartItem.id !== item.id),
        { ...itemToUpdate, quantity: itemToUpdate.quantity + 1 },
      ]
    : [...cart, { ...item, quantity: 1 }];
};

export const remove = (id: number, cart: cartItem[]) => {
  const itemToUpdate = cart.find((cartItem) => cartItem.id === id);

  if (!itemToUpdate) {
    return cart;
  }

  return itemToUpdate.quantity > 1
    ? [
        ...cart.filter((cartItem) => cartItem.id !== id),
        { ...itemToUpdate, quantity: itemToUpdate.quantity - 1 },
      ]
    : cart.filter((cartItem) => cartItem.id !== id);
};
