import React from "react";
import { Header, Table, Button, Label } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default ({ offers, handleConfirmOffer }) => {
  return (
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
          {!offers.length ? (
            <Table.Row>
              <Table.Cell colSpan="5">No offers</Table.Cell>
            </Table.Row>
          ) : (
            offers.map(({ _id, issuedAt, type }, i) => (
              <Table.Row key={_id}>
                <Table.Cell>{i + 1}</Table.Cell>
                <Table.Cell>
                  <Link to={`/orders/${_id}`}>{_id}</Link>
                </Table.Cell>
                <Table.Cell>{type}</Table.Cell>
                <Table.Cell>{issuedAt}</Table.Cell>
                <Table.Cell>
                  {type === "Offer" ? (
                    <Button
                      content="Confirm"
                      primary
                      onClick={() => handleConfirmOffer(_id)}
                    />
                  ) : (
                    <Label content="Waiting for response" />
                  )}
                </Table.Cell>
              </Table.Row>
            ))
          )}
        </Table.Body>
      </Table>
    </>
  );
};
