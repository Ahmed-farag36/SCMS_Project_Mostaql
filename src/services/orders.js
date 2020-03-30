import DB from "./dummyDB";

export const getAll = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(DB.orders);
    }, 500);
  });
};

export const getAllForSupplier = supplierId => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(
        DB.orders.filter(
          order => order.supplierId === supplierId && order.type === "Confirmed"
        )
      );
    }, 500);
  });
};

export const getOne = orderId => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(DB.orders.find(order => order.id === orderId));
    }, 500);
  });
};

export const getAllForCustomer = customerId => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(
        DB.orders.filter(
          order => order.customerId === customerId && order.type === "Confirmed"
        )
      );
    }, 500);
  });
};

export const getAllCustomerOffers = customerId => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(
        DB.orders.filter(
          order => order.customerId === customerId && order.type !== "Confirmed"
        )
      );
    }, 500);
  });
};

export const getCustomerInventory = customerId => {
  return new Promise(resolve => {
    setTimeout(() => {
      const { inventory } = DB.customers.find(
        customer => customer.id === customerId
      );
      resolve(DB.products.filter(product => inventory.includes(product.id)));
    }, 500);
  });
};
