import Home from './pages/Home';
import Hooks from './pages/Hooks';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    exact: true,
  },
  {
    path: '/hooks',
    name: 'Hooks',
    component: Hooks,
    exact: true,
  },
];

export default routes;
