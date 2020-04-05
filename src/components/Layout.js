import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Header, Image, Button } from "semantic-ui-react";

import { UserContext } from "./AuthProvider";

import { logout } from "../services/users";

export default ({ children }) => {
  const user = useContext(UserContext);
  const { push } = useHistory();

  const handleLogout = () => {
    logout().then(data => {
      console.log(data);
      push("/login", data);
    });
  };

  return (
    <>
      <header>
        <div className="site-title">
          <Link to="/">
            <Image src="/SCMCH_LOGO_1.png" size="mini" />
            <Header size="huge" content="SCM" />
          </Link>
        </div>
        <nav>
          <ul>
            {user.role !== "customer" && (
              <li>
                <Link to="/warehouse">Warehouse</Link>
              </li>
            )}
            {user.role !== "customer" && (
              <li>
                <Link to="/orders">Orders</Link>
              </li>
            )}
            {user.role === "customer" && (
              <li>
                <Link to="/inventory">Inventory</Link>
              </li>
            )}
            {user.role && (
              <li>
                <Link to="/products">Products</Link>
              </li>
            )}
          </ul>
          <Image
            src="https://avatars0.githubusercontent.com/u/31740010?v=4"
            avatar
          />
          <span>
            {user.username} (Logged in as {user.role})
          </span>
          <Button content="Logout" onClick={handleLogout} />
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
};
