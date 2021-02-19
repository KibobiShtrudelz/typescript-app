import { Route, Redirect } from "react-router-dom";
import { ReactNode } from "react";

interface PrivateRouteProps {
  path: string;
  exact?: boolean;
  children: ReactNode;
}

const PrivateRoute = ({ exact = false, path, children }: PrivateRouteProps) => (
  <Route exact={exact} path={path}>
    {children}
  </Route>
);

export default PrivateRoute;
