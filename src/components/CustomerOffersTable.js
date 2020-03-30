import React from "react";
import { Header, Table, Button, Label } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default ({ offers, handleConfirmOffer }) => (
  <>
    <Header as="h2" content="Offers" />
    <Table className="orders" padded celled unstackable striped>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell collapsing>No.</Table.HeaderCell>
          <Table.HeaderCell>Order No.</Table.HeaderCell>
          <Table.HeaderCell>Type</Table.HeaderCell>
          <Table.HeaderCell>Issued At</Table.HeaderCell>
          <Table.HeaderCell>Actions</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {offers.map(({ id, issuedAt, type }, i) => (
          <Table.Row key={id}>
            <Table.Cell>{i + 1}</Table.Cell>
            <Table.Cell>
              <Link to={`/orders/${id}`}>{id}</Link>
            </Table.Cell>
            <Table.Cell>{type}</Table.Cell>
            <Table.Cell>{issuedAt}</Table.Cell>
            <Table.Cell>
              {type === "Offer" ? (
                <Button
                  content="Confirm"
                  primary
                  onClick={handleConfirmOffer}
                />
              ) : (
                <Label content="Waiting for response" />
              )}
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  </>
);
