const HOST = "http://localhost:3001";

export const getAll = () => {
	return fetch(`${HOST}/products`);
};

export const getAllForSupplier = supplierId => {
	return fetch(`${HOST}/products/suppliers/${supplierId}`);
};

export const getOne = productId => {
	return fetch(`${HOST}/products/${productId}`);
};

export const addOne = formData => {
	return fetch(`${HOST}/products/suppliers/new-product`, {
		method: "POST",
		body: formData
	});
};
