import React from "react";
import { Route } from "react-router-dom";
import { publicRouteList } from "../../Routes";

const Layout = React.lazy(() => import('../../Layout'));

const publicRouter = (handleNavigate) => {

    const PublicRoutes = ({ children }) => {
        // let token = isAuthenticated();
        // if (token) {
        //     return <Navigate to={'/user'} />;
        // }
        return children;
    };

    return (
        publicRouteList.map(({ component: Component, path }, key) => {
            return <Route
                path={path}
                element={
                    <PublicRoutes>
                        <Layout handleNavigate={handleNavigate}>
                            <Component handleNavigate={handleNavigate} />
                        </Layout>
                    </PublicRoutes>
                }
                key={key}
            />
        })
    )
};

export default publicRouter
