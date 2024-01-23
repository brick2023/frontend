// routes.js
import HomePage from 'pages/HomePage';
import AboutPage from 'pages/AboutPage';
import LoginPage from 'pages/LoginPage';

const routes = [
  { path: '/', component: HomePage, exact: true },
  { path: '/about', component: AboutPage },
  { path: '/login', component: LoginPage },
];

export default routes;
