// route components based on query string.

import React, { useEffect } from 'react';
import queryString from 'query-string';
import Loadable from 'react-loadable';
import { useLocation } from 'react-router-dom';

// const AppMock = Loadable({
//   loader: () => import('../AppMock'),
//   loading: <div>Loading</div>,
// });
// const ModifiedApp = Loadable({
//   loader: () => import('../ModifiedApp'),
//   loading: <div>Loading</div>,
// });
// const Welcome = () => {
//   return Loadable({
//     loader: () => import('../Welcome'),
//     loading: <div>Loading</div>,
//   });
// };

import AppMock from '../AppMock';
import ModifiedApp from '../ModifiedApp';
import Welcome from '../Welcome';

const routes = {
  appmock: AppMock,
  modifiedapp: ModifiedApp,
};

const ContentRouter = (props) => {
  useEffect(() => {
    console.log('refreshed router');
  });

  const value = queryString.parse(useLocation().search);
  const page = value.page;

  if (!page) {
    console.log('return welcome');
    return <div>welcome</div>;
  }
  if (routes[page]) {
    console.log('return ', page);
    return routes[page]();
  } else {
    console.log('return not found');
    return <div>page not found</div>;
  }
};

export default ContentRouter;
