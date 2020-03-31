import React, { createContext, useState, useEffect } from "react";

import {
	getUser,
	loginAsAdmin,
	loginAsCustomer,
	loginAsSupplier
} from "../services/users";

export const UserContext = createContext({});

function AuthProvider({ children }) {
	const [user, setUser] = useState({});
	console.log(user);

	// useEffect(() => {
	// 	getUser().then(user => setUser(user));
	// }, []);
	const login = type => {
		switch (type) {
			case "Customer":
				loginAsCustomer().then(user => setUser(user));
				break;
			case "Supplier":
				loginAsSupplier().then(user => setUser(user));
				break;
			case "Admin":
				loginAsAdmin().then(user => setUser(user));
				break;
			default:
				setUser({});
		}
	};

	return (
		<UserContext.Provider value={{ user, login }}>
			{children}
		</UserContext.Provider>
	);
}

export default AuthProvider;
