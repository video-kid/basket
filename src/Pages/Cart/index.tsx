import { useContext } from 'react';
import { CartContext } from '../../context/Cart/CartContext';
import { cartItem } from '../../types/cart';

const asc = (a: cartItem, b: cartItem) => {
  return a.id - b.id;
};

const CartPage = () => {
  const { cart, cartPrice, removeFromCart } = useContext(CartContext);

  return (
    <div>
      <h2>Cart:</h2>
      <section>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Qty</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          {cart.sort(asc).map((item) => (
            <tr key={item.id}>
              <td>
                <img
                  src={item.image}
                  height='30px'
                  width='30px'
                  alt={item.title}
                />
                {item.title}
              </td>
              <td>{item.quantity}</td>
              <td>{item.quantity * item.price}$</td>
              <td>
                <button onClick={() => removeFromCart(item.id)}>remove</button>
              </td>
            </tr>
          ))}
        </table>
      </section>
      <section>sum: {cartPrice}$</section>
    </div>
  );
};

export default CartPage;
