import React, { createContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Warehouse from "./pages/Warehouse";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Orders from "./pages/Orders";
import Order from "./pages/Order";
import Inventory from "./pages/Inventory";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

import Layout from "./components/Layout";
import AuthProvider from "./components/AuthProvider";
import SupplierRoute from "./components/SupplierRoute";
import CustomerRoute from "./components/CustomerRoute";
import AdminRoute from "./components/AdminRoute";
import AuthenticatedRoute from "./components/AuthenticatedRoute";

import "./styles.css";

export const userContext = createContext();

export default function App() {
	return (
		<BrowserRouter>
			<AuthProvider>
				<Layout>
					<Switch>
						<Route exact path="/" component={Homepage} />
						<Route path="/signup" component={Signup} />
						<Route path="/login" component={Login} />
						<AdminRoute path="/dashboard">
							<Dashboard />
						</AdminRoute>
						<AuthenticatedRoute path="/orders/:orderId">
							<Order />
						</AuthenticatedRoute>
						<SupplierRoute path="/orders">
							<Orders />
						</SupplierRoute>
						<SupplierRoute path="/warehouse">
							<Warehouse />
						</SupplierRoute>
						<CustomerRoute path="/inventory">
							<Inventory />
						</CustomerRoute>
						<AuthenticatedRoute path="/products/:productId">
							<Product />
						</AuthenticatedRoute>
						<AuthenticatedRoute path="/products">
							<Products />
						</AuthenticatedRoute>
					</Switch>
				</Layout>
			</AuthProvider>
		</BrowserRouter>
	);
}
