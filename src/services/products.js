import DB from "./dummyDB";

export const getAll = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(DB.products);
    }, 500);
  });
};

export const getAllForSupplier = supplierId => {
  return new Promise(resolve => {
    setTimeout(() => {
      const products = DB.products.filter(
        product => product.supplierId === supplierId
      );
      resolve(products);
    }, 500);
  });
};

export const getOne = productId => {
  return new Promise(resolve => {
    setTimeout(() => {
      const product = DB.products.find(product => product.id === productId);
      const supplier = DB.suppliers.find(
        supplier => supplier.id === product.supplierId
      );
      resolve({ ...product, supplier });
    }, 500);
  });
};
