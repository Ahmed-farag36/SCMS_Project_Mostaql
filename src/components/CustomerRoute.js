import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import { UserContext } from "./AuthProvider";

export default ({ children, ...rest }) => {
  const user = useContext(UserContext);

  return user.role === "customer" ? (
    <Route {...rest} render={props => children} />
  ) : (
    <Redirect
      to={{
        pathname: "/",
        state: {
          message: "You are not allowed to access this data",
          type: "error"
        }
      }}
    />
  );
};
