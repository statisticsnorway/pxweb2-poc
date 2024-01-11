import { Outlet, type RouteObject } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import ErrorPage from './error-page';
import App from './app/app';
import NotFoundPage from './not-found-page';

const routesConfig: RouteObject[] = [
  {
    path: '/',
    element: (
      <>
        <Header />
        <Outlet />{' '}
        {/* This is where the content of the children are rendered */}
        <Footer />
      </>
    ),
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <App /> },
      { path: '/tabell', element: <div>Tabell</div> },
      { path: '/*', element: <NotFoundPage /> },
    ],
  },
];

export default routesConfig;
