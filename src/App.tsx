import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <header>
        <nav>
          <Link to='cart'>cart</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
