import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/Cart/CartContext';

const Header = () => {
  const { sumOfCartItems } = useContext(CartContext);

  return (
    <header>
      ShopLogo
      <nav>
        <Link to='cart'>cart ({sumOfCartItems})</Link>
      </nav>
    </header>
  );
};

export default Header;
