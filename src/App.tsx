import { Outlet } from 'react-router-dom';
import { CartProvider } from './context/Cart/CartContext';
import Header from './components/Header/Header';

function App() {
  return (
    <div className='App'>
      <CartProvider>
        <Header />
        <main>
          <Outlet />
        </main>
      </CartProvider>
    </div>
  );
}

export default App;
