import React, { lazy, Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import DefaultLayout from '../layout/DefaultLayout';
import PATHS from './path';
import { Preloader } from '../components';

const Home = lazy(() => import('../pages/Home'));


const routes = [
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      { path: PATHS.home, element: <Home /> },
     
    ],
  },
];

const Routes = () => {
  const routing = useRoutes(routes);

  return <Suspense fallback={<Preloader />}>{routing}</Suspense>;
};

export default Routes;
