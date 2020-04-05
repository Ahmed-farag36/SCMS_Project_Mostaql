import DB from "./dummyDB";

const HOST = `https://vy54w.sse.codesandbox.io`;

export const getAll = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(DB.orders);
    }, 500);
  });
};

export const getAllForSupplier = supplierId => {
  return fetch(`${HOST}/orders/suppliers/${supplierId}`);
};

export const getOne = orderId => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(DB.orders.find(order => order.id === orderId));
    }, 500);
  });
};

export const getAllForCustomer = customerId => {
  return fetch(`${HOST}/orders/customers/${customerId}`);
};

export const getAllCustomerOffers = customerId => {
  return fetch(`${HOST}/orders/customers/${customerId}/offers`);
};

export const getCustomerInventory = customerId => {
  return fetch(`${HOST}/products/customers/${customerId}`);
};

export const inquireProduct = (customerId, inventory, quantity) => {
  const products = inventory.map((product, i) => {
    return {
      productId: product._id,
      productTitle: product.title,
      quantity: quantity[`qty${i}`],
      price: product.price
    };
  });
  return fetch(`${HOST}/orders/customers/${customerId}/inquire`, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      supplierId: inventory[0].supplierId,
      customerId,
      status: "Proccessing",
      type: "Inquire",
      products
    })
  });
};

export const confirmOrder = orderId => {
  return fetch(`${HOST}/orders/${orderId}/confirm`, {
    method: "PUT"
  });
};

export const customerCancelOrder = orderId => {
  return fetch(`${HOST}/orders/${orderId}/customerCancel`, {
    method: "PUT"
  });
};
