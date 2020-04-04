const HOST = "http://localhost:3001"

export const getUser = (username, password) => {
	return Promise.resolve({ id: "100", role: "Supplier" }); //userId
};

export const register = (username, password, confirmPassword, email, role) => {
	console.log(username)
	// fetch(`${HOST}/register`, {
	// 	method: "POST",
	// 	headers: {
	// 		"content-type": "application/json"
	// 	},
	// 	body: {
	// 		username,
	// 		password,
	// 		confirmPassword,
	// 		email,
	// 		role
	// 	}
	// })
};

export const loginAsSupplier = () => {
	return Promise.resolve({ id: "100", role: "Supplier" });
};

export const loginAsAdmin = () => {
	return Promise.resolve({ id: "200", role: "Admin" });
};
