import Chat from '../pages/Chat';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';

export const publicRoutes = [
  {
    path: '/login',
    Component: Login,
  },
  {
    path: '/register',
    Component: Register,
  },
  {
    path: '/',
    Component: Home,
  },
];

export const privateRoutes = [
  {
    path: '/chat',
    Component: Chat,
  },
];
