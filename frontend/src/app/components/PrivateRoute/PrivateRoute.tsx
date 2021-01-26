import { Route, Redirect } from "react-router";
import Cookies from "universal-cookie";
import React from "react";

import useViewport from "../../../app/hooks/useViewport";
import authFormStore from "../../redux/authFormStore";
import { useAppDispatch } from "../../redux/store";

type Props = {
  children: React.ReactNode;
  exact?: boolean;
  path: string;
};

const PrivateRoute = ({ path, exact, children }: Props) => {
  const cookies = new Cookies();
  const isAuth = cookies.get("jwt");

  const { width } = useViewport();
  const dispatch = useAppDispatch();

  const getPathname = (): string | undefined => {
    if (width && width < 600) {
      return "/";
    } else {
      dispatch(authFormStore.actions.toggleAuthForm());
      return;
    }
  };

  return (
    <Route
      path={path}
      exact={exact}
      render={({ location }) =>
        isAuth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: getPathname(),
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
