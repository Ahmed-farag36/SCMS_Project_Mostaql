import React, { useContext } from "react";
import { Header, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

import { UserContext } from "../components/AuthProvider";

export default () => {
  const user = useContext(UserContext);

  if (!user.username) {
    return (
      <>
        <Button as={Link} to="/signup" content="Register" primary />
        <Button as={Link} to="/login" content="Login" primary />
      </>
    );
  }

  return (
    <>
      <Header
        as="h1"
        content={"Welcome To Our Supply Chain Managment Website"}
      />
    </>
  );
};
