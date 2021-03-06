import React from "react";
import { Header, Table, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default ({ orders, handleCancelOrder }) => (
  <>
    <Header as="h1" content="Orders" />
    <Table className="orders" padded celled unstackable striped>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell collapsing>No.</Table.HeaderCell>
          <Table.HeaderCell>Order No.</Table.HeaderCell>
          <Table.HeaderCell>Status</Table.HeaderCell>
          <Table.HeaderCell>Issued At</Table.HeaderCell>
          <Table.HeaderCell>Actions</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {!orders.length ? (
          <Table.Row>
            <Table.Cell colSpan="5">No orders</Table.Cell>
          </Table.Row>
        ) : (
          orders.map(({ _id, status, issuedAt }, i) => (
            <Table.Row key={_id}>
              <Table.Cell>{i + 1}</Table.Cell>
              <Table.Cell>
                <Link to={`/orders/${_id}`}>{_id}</Link>
              </Table.Cell>
              <Table.Cell>{status}</Table.Cell>
              <Table.Cell>{issuedAt}</Table.Cell>
              <Table.Cell>
                <Button
                  content="Cancel"
                  negative
                  onClick={() => handleCancelOrder(_id)}
                />
              </Table.Cell>
            </Table.Row>
          ))
        )}
      </Table.Body>
    </Table>
  </>
);
