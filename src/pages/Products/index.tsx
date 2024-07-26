import { useEffect, useState } from 'react';
import { type product } from '../../types/product';

const Products = () => {
  const [products, setProducts] = useState<Array<product>>([]);

  const fetchProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json();

    return setProducts(products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ul>
      {products.map((item) => (
        <li>
          <figure>
            <img
              src={item.image}
              alt={item.title}
              height='100px'
              width='100px'
            />
            <figcaption>
              <h5>{item.title}</h5>
              {item.price}$<button>Add</button>
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
};

export default Products;
