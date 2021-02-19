import { Route } from "react-router-dom";
import { ReactNode } from "react";

interface PublicRouteProps {
  path: string;
  exact?: boolean;
  children: ReactNode;
}

const PublicRoute = ({ exact = false, path, children }: PublicRouteProps) => (
  <Route exact={exact} path={path}>
    {children}
  </Route>
);

export default PublicRoute;
