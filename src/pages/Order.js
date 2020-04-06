import React from "react";
import { useParams } from "react-router-dom";
import { Header, Table } from "semantic-ui-react";

import useQuery from "../hooks/useQuery";

import { getOne } from "../services/orders";

export default () => {
  const { orderId } = useParams();
  const { data: order, loading } = useQuery(getOne, orderId);

  if (loading) return <h1>loading</h1>;
  console.log(order);

  return (
    <>
      <Header as="h1" content={`Order No. ${orderId}`} />
      <Table celled padded striped unstackable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell collapsing>No.</Table.HeaderCell>
            <Table.HeaderCell>Product Title</Table.HeaderCell>
            <Table.HeaderCell>Quantity</Table.HeaderCell>
            <Table.HeaderCell>Price per Unit</Table.HeaderCell>
            <Table.HeaderCell>Total Price</Table.HeaderCell>
            {/* <Table.HeaderCell>Issued At</Table.HeaderCell> */}
            {/* <Table.HeaderCell>Due Date</Table.HeaderCell> */}
            {/* <Table.HeaderCell>Status</Table.HeaderCell> */}
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {order.products.map(({ id, productTitle, quantity, price }, i) => (
            <Table.Row key={id}>
              <Table.Cell>{i + 1}</Table.Cell>
              <Table.Cell>{productTitle}</Table.Cell>
              <Table.Cell>{quantity}</Table.Cell>
              <Table.Cell>{`$ ${price.toFixed(2)}`}</Table.Cell>
              <Table.Cell>{`$ ${(quantity * price).toFixed(2)}`}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </>
  );
};
