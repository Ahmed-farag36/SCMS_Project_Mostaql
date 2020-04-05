const HOST = "https://vy54w.sse.codesandbox.io";

export const getAll = () => {
  return fetch(`${HOST}/products`);
};

export const getAllForSupplier = supplierId => {
  return fetch(`${HOST}/products/suppliers/${supplierId}`);
};

export const getOne = productId => {
  return fetch(`${HOST}/products/${productId}`);
};

export const addOne = product => {
  return fetch(`${HOST}/products/suppliers/new-product`, {
    method: "POST",
    body: product
  });
};

export const addToInventory = (userId, productId) => {
  return fetch(`${HOST}/products/${userId}/products/${productId}`, {
    method: "POST"
  });
};

export const removeFromInventory = (userId, productId) => {
  return fetch(`${HOST}/products/${userId}/products/${productId}`, {
    method: "DELETE"
  });
};
