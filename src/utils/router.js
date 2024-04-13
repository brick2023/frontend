// routes.js
import HomePage from 'pages/HomePage';
import AboutPage from 'pages/AboutPage';
import VideoPage from 'pages/VideoPage';
import SearchPage from 'pages/SearchPage';

const routes = [
  { path: '/', component: HomePage, exact: true },
  { path: '/profile', component: AboutPage },
  { path: '/video', component: VideoPage },
  { path: '/search', component: SearchPage },
];

export default routes;
