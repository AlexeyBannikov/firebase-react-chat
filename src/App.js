import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

import Header from './components/Header';
import { privateRoutes, publicRoutes } from './components/routes';
import Chat from './pages/Chat';
import { Context } from './index';
import Loader from './components/Loader';
import Home from './pages/Home';

import './assets/styles/global.scss';

const App = () => {
  const { auth } = React.useContext(Context);
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <Header />
      {user ? (
        <Routes>
          {privateRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
          <Route path={'*'} element={<Chat />} />
        </Routes>
      ) : (
        <Routes>
          {publicRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
          <Route path={'*'} element={<Home />} />
        </Routes>
      )}
    </div>
  );
};

export default App;
