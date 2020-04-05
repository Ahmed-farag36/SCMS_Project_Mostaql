import React from "react";
import { Header, Table, Button, Modal } from "semantic-ui-react";
import { Link } from "react-router-dom";

import InquiryForm from "./InquiryForm";

export default ({
  inventory,
  handleRemoveProduct,
  handleInquireProduct,
  isModalOpen,
  setIsModalOpen
}) => {
  return (
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
          {!inventory.length ? (
            <Table.Row>
              <Table.Cell colSpan="4">Inventory is empty</Table.Cell>
            </Table.Row>
          ) : (
            inventory.map(({ _id, title }, i) => (
              <Table.Row key={_id}>
                <Table.Cell>{i + 1}</Table.Cell>
                <Table.Cell>
                  <Link to={`/products/${_id}`}>{_id}</Link>
                </Table.Cell>
                <Table.Cell>
                  <Link to={`/products/${_id}`}>{title}</Link>
                </Table.Cell>
                <Table.Cell>
                  <Button
                    content="Remove"
                    negative
                    onClick={() => handleRemoveProduct(_id)}
                  />
                </Table.Cell>
              </Table.Row>
            ))
          )}
          <Table.Row>
            <Table.Cell colSpan="4">
              <Button
                content="Inquiry"
                primary
                disabled={!inventory.length}
                onClick={() => setIsModalOpen(true)}
              />
              <Modal
                as={InquiryForm}
                open={isModalOpen}
                inventory={inventory}
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                handleInquireProduct={handleInquireProduct}
              />
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </>
  );
};
