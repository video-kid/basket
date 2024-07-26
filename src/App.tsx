import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <nav>
        <button>cart</button>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
