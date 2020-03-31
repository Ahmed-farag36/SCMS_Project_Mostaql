import React, { useContext } from "react";

import CustomerOrdersTable from "../components/CustomerOrdersTable";
import CustomerOffersTable from "../components/CustomerOffersTable";
import CustomerInventoryTable from "../components/CustomerInventoryTable";

import useQuery from "../hooks/useQuery";

import {
	getAllForCustomer,
	getCustomerInventory,
	getAllCustomerOffers
} from "../services/orders";

import { UserContext } from "../components/AuthProvider";

export default () => {
	const user = useContext(UserContext);

	const { data: inventory } = useQuery(() => getCustomerInventory("200"));
	const { data: offers } = useQuery(() => getAllCustomerOffers("200"));
	const { data: orders, loading } = useQuery(() => getAllForCustomer("200"));

	if (loading) return <h1>loading</h1>;

	const handleConfirmOffer = () => {};
	const handleRemoveProduct = () => {};
	const handleCancelOrder = () => {};

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
			/>
		</>
	);
};
