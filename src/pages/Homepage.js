import React, { useContext } from "react";
import { Header, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

import { UserContext } from "../components/AuthProvider";

export default () => {
	const { login, user } = useContext(UserContext);
	console.log(user);
	return (
		<>
			<Header
				as="h1"
				content={"Welcome To Our Supply Chain Managment Website"}
			/>
			<Button
				as={Link}
				to="/inventory"
				content="Login as Customer"
				primary
				onClick={() => login("Customer")}
			/>
			<Button
				as={Link}
				to="/warehouse"
				content="Login as Supplier"
				primary
				onClick={() => login("Supplier")}
			/>
			<Button
				as={Link}
				to="/dashboard"
				content="Login as Admin"
				primary
				onClick={() => login("Admin")}
			/>
		</>
	);
};
