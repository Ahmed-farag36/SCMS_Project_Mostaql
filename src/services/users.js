export const getUser = (username, password) => {
	return Promise.resolve(null); //userId
};

export const loginAsCustomer = () => {
	return Promise.resolve({ id: "200", role: "Customer" });
};

export const loginAsSupplier = () => {
	return Promise.resolve({ id: "100", role: "Supplier" });
};

export const loginAsAdmin = () => {
	return Promise.resolve({ id: "200", role: "Admin" });
};
