import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Header, Table, Icon } from "semantic-ui-react";

import useQuery from "../hooks/useQuery";

import { UserContext } from "../components/AuthProvider";

import { getAllForSupplier } from "../services/orders";

export default () => {
  const user = useContext(UserContext);
  const { data: orders, loading } = useQuery(getAllForSupplier, user._id);

  if (loading) return <h1>loading</h1>;
  console.log(orders);

  return (
    <>
      <Header as="h1" content="Orders" />
      {/* TODO: Sortable table */}
      <Table className="orders" celled padded striped unstackable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell collapsing>No.</Table.HeaderCell>
            <Table.HeaderCell>Order ID</Table.HeaderCell>
            <Table.HeaderCell>Issued At</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {!orders.length ? (
            <Table.Row>
              <Table.Cell colSpan={4}>No Orders</Table.Cell>
            </Table.Row>
          ) : (
            orders.map(({ _id, issuedAt, status }, i) => (
              <Table.Row key={_id}>
                <Table.Cell singleLine>{i + 1}</Table.Cell>
                <Table.Cell singleLine>
                  <Link to={`/orders/${_id}`}>{_id}</Link>
                </Table.Cell>
                <Table.Cell>{issuedAt}</Table.Cell>
                <Table.Cell>
                  {status}
                  <Icon color="blue" name="shipping" size="small" />
                </Table.Cell>
              </Table.Row>
            ))
          )}
        </Table.Body>
      </Table>
    </>
  );
};
