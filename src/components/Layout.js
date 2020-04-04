import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Header, Image } from "semantic-ui-react";

import { UserContext } from "./AuthProvider";

export default ({ children }) => {
	const user = useContext(UserContext);

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
						{user && user.role !== "Customer" && (
							<li>
								<Link to="/warehouse">Warehouse</Link>
							</li>
						)}
						{user && user.role !== "Customer" && (
							<li>
								<Link to="/orders">Orders</Link>
							</li>
						)}
						{/* {user && user.role === "Customer" && ( */}
						{/* <li>
							<Link to="/inventory">Inventory</Link>
						</li> */}
						{/* )} */}
						{user && (
							<li>
								<Link to="/products">Products</Link>
							</li>
						)}
					</ul>
					<Image
						src="https://avatars0.githubusercontent.com/u/31740010?v=4"
						avatar
					/>
					<span>John Doe (Loggedin as supplier)</span>
				</nav>
			</header>
			<main>{children}</main>
		</>
	);
};
