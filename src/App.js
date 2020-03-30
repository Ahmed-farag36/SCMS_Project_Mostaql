import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Warehouse from "./pages/Warehouse";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Orders from "./pages/Orders";
import Order from "./pages/Order";
import Inventory from "./pages/Inventory";
import Dashboard from "./pages/Dashboard";

import Layout from "./components/Layout";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/warehouse" component={Warehouse} />
            <Route exact path="/products/:productId" component={Product} />
            <Route exact path="/orders" component={Orders} />
            <Route path="/orders/:orderId" component={Order} />
            <Route path="/inventory" component={Inventory} />
            <Route path="/products" component={Products} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}
