import React from 'react';
import { Helmet } from 'react-helmet';
import { Route } from 'react-router-dom';
import { publicRouteList } from '../../Routes';

const BaseLayout = React.lazy(() => import('../../Layout/BaseLayout'));

const publicRouter = (handleNavigate) => {
  const PublicRoutes = ({ children }) => {
    // let token = isAuthenticated();
    // if (token) {
    //     return <Navigate to={'/user'} />;
    // }
    return children;
  };

  return publicRouteList.map(({ component: Component, path, title }, key) => {
    return (
      <Route
        path={path}
        element={
          <PublicRoutes>
            <>
              <Helmet>
                <title>{title}</title>
              </Helmet>
              <BaseLayout title={title} handleNavigate={handleNavigate}>
                <Component handleNavigate={handleNavigate} />
              </BaseLayout>
            </>
          </PublicRoutes>
        }
        key={key}
      />
    );
  });
};

export default publicRouter;
