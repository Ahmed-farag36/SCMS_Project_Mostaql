import React from "react";
import { Link } from "react-router-dom";
import { Header, Table, Pagination, Icon } from "semantic-ui-react";

import useQuery from "../hooks/useQuery";

import { getAllForSupplier } from "../services/orders";

export default () => {
  const { data: orders, loading } = useQuery(() => getAllForSupplier("100"));

  if (loading) return <h1>loading</h1>;

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
          {orders.map(({ id, issuedAt, status }, i) => (
            <Table.Row key={id}>
              <Table.Cell singleLine>{i + 1}</Table.Cell>
              <Table.Cell singleLine>
                <Link to={`/orders/${id}`}>{id}</Link>
              </Table.Cell>
              <Table.Cell>{issuedAt}</Table.Cell>
              <Table.Cell>
                {status}
                <Icon color="blue" name="shipping" size="small" />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <Pagination totalPages="5" activePage="1" />
    </>
  );
};