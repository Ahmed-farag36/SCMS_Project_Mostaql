import React from "react";
import { Header, Table, Button, Modal } from "semantic-ui-react";
import { Link } from "react-router-dom";

import InquiryForm from "./InquiryForm";

export default ({ inventory, handleRemoveProduct }) => (
  <>
    <Header as="h2" content="Inventory" />
    <Table className="orders" padded celled unstackable striped>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell collapsing>No.</Table.HeaderCell>
          <Table.HeaderCell>Product No.</Table.HeaderCell>
          <Table.HeaderCell>Title</Table.HeaderCell>
          <Table.HeaderCell>Actions</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {inventory.map(({ id, title }, i) => (
          <Table.Row key={id}>
            <Table.Cell>{i + 1}</Table.Cell>
            <Table.Cell>
              <Link to={`/products/${id}`}>{id}</Link>
            </Table.Cell>
            <Table.Cell>
              <Link to={`/products/${id}`}>{title}</Link>
            </Table.Cell>
            <Table.Cell>
              <Button content="Remove" negative onClick={handleRemoveProduct} />
            </Table.Cell>
          </Table.Row>
        ))}
        <Table.Row>
          <Table.Cell colSpan="4">
            <Modal
              trigger={<Button content="Inquiry" primary />}
              as={InquiryForm}
              inventory={inventory}
            />
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </>
);
