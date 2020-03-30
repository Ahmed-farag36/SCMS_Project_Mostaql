import React from "react";
import { Link } from "react-router-dom";
import { Header, Image } from "semantic-ui-react";

export default ({ children }) => {
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
            <li>
              <Link to="/warehouse">Warehouse</Link>
            </li>
            <li>
              <Link to="/orders">Orders</Link>
            </li>
          </ul>
          <Image
            src="https://avatars0.githubusercontent.com/u/31740010?v=4"
            avatar
          />
          <span>John Doe</span>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
};
