import React, { useContext, useState } from "react";

import CustomerOrdersTable from "../components/CustomerOrdersTable";
import CustomerOffersTable from "../components/CustomerOffersTable";
import CustomerInventoryTable from "../components/CustomerInventoryTable";

import useQuery from "../hooks/useQuery";

import {
  getAllForCustomer,
  getCustomerInventory,
  getAllCustomerOffers,
  inquireProduct,
  confirmOrder,
  customerCancelOrder
} from "../services/orders";
import { removeFromInventory } from "../services/products";

import { UserContext } from "../components/AuthProvider";

export default () => {
  const user = useContext(UserContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data: offers, setData: setOffers } = useQuery(
    getAllCustomerOffers,
    user._id
  );
  const { data: inventory, loading, setData } = useQuery(
    getCustomerInventory,
    user._id
  );
  const { data: orders, setData: setOrders } = useQuery(
    getAllForCustomer,
    user._id
  );

  if (loading) return <h1>loading</h1>;

  const handleConfirmOffer = orderId => {
    confirmOrder(orderId).then(() => {
      setOrders(
        orders.filter(order =>
          order._id !== orderId
            ? order
            : { ...order, type: "Preparing", status: "Confirmed" }
        )
      );
    });
  };

  const handleRemoveProduct = productId => {
    const filteredProducts = inventory.filter(({ _id }) => _id !== productId);
    removeFromInventory(user._id, productId).then(() => {
      setData(filteredProducts);
    });
  };

  const handleCancelOrder = orderId => {
    customerCancelOrder(orderId).then(() => {
      setOrders(orders.filter(({ _id }) => _id !== orderId));
    });
  };

  const handleInquireProduct = (customerId, inventory, quantity) => {
    inquireProduct(customerId, inventory, quantity)
      .then(res => res.json())
      .then(offers => {
        setOffers(state => [...state, offers]);
        setIsModalOpen(false);
      });
  };

  return (
    <>
      <CustomerOrdersTable
        orders={orders}
        handleCancelOrder={handleCancelOrder}
      />
      <CustomerOffersTable
        offers={offers}
        handleConfirmOffer={handleConfirmOffer}
      />
      <CustomerInventoryTable
        inventory={inventory}
        handleRemoveProduct={handleRemoveProduct}
        handleInquireProduct={handleInquireProduct}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </>
  );
};
