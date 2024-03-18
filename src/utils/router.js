// routes.js
import HomePage from 'pages/HomePage';
import AboutPage from 'pages/AboutPage';
import VideoPage from 'pages/VideoPage';

const routes = [
  { path: '/', component: HomePage, exact: true },
  { path: '/about', component: AboutPage },
  { path: '/video', component: VideoPage },
];

export default routes;
