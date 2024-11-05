import React from 'react';
import { useRoutes, Link } from 'react-router-dom';
import Home from './components/Home';
import Update from './components/Update';
import Create from './components/Create';
import './App.css';
function App() {
  const routes = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/create',
      element: <Create />,
    },
    {
      path: '/update',
      element: <Update />,
    },
  ]);

  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/create"> Add new Sonny Angel</Link> |
        <Link to="/update">  Sonny Angel Gallery</Link>
      </nav>

      {routes}
    </div>
  );
}

export default App;
