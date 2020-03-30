import React from "react";
import { Header, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default () => (
  <>
    <Header as="h1" content="Welcome To Our Supply Chain Managment Website" />
    <Link to="/warehouse">
      <Button content="Login" primary />
    </Link>
  </>
);
