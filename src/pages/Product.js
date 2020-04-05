import React, { useContext, useState } from "react";
import { Header, Image, Table, Button, Input, Tab } from "semantic-ui-react";
import { useParams } from "react-router-dom";

import { UserContext } from "../components/AuthProvider";

import useQuery from "../hooks/useQuery";
import useMutation from "../hooks/useMutation";

import {
  getOne,
  addToInventory,
  removeFromInventory
} from "../services/products";

export default () => {
  const { productId } = useParams();
  const user = useContext(UserContext);
  const { data: productData, loading } = useQuery(getOne, productId);
  const { data: addData, loading: addLoading, post } = useMutation();
  const [toggleBtn, setToggleBtn] = useState(true);

  if (loading) return <h1>loading...</h1>;

  const handleUpdate = () => {};
  const handleDelete = () => {};

  const handleToggleBtn = () => {
    if (addData) {
      setToggleBtn(state => !state);
      post(removeFromInventory, user._id, productId);
    } else {
      setToggleBtn(state => !state);
      post(addToInventory, user._id, productId);
    }
  };

  const { product, supplierName } = productData;

  const specs = (
    <>
      <Table.Row>
        <Table.Cell>10</Table.Cell>
        <Table.Cell width="16">
          <Input defaultValue={product.spec1} icon="edit" transparent fluid />
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>10</Table.Cell>
        <Table.Cell width="16">
          <Input defaultValue={product.spec2} icon="edit" transparent fluid />
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>10</Table.Cell>
        <Table.Cell width="16">
          <Input defaultValue={product.spec3} icon="edit" transparent fluid />
        </Table.Cell>
      </Table.Row>
    </>
  );

  return (
    <>
      <Header as="h1" content={product.title} />
      <Header size="tiny" content={product.category} />
      <Image /* src={product.images[0]} */ src="/testImg.webp" />
      <Table celled padded striped unstackable>
        <Table.Body>
          <Tab
            panes={[
              {
                menuItem: "Metadata",
                render: () => (
                  <MetadataPane supplierName={supplierName} product={product} />
                )
              },
              {
                menuItem: "Specifications",
                render: () => specs
              }
            ]}
          />
        </Table.Body>
      </Table>
      {user.role === "supplier" && (
        <Button content="Update" icon="edit" primary onClick={handleUpdate} />
      )}
      {user.role === "supplier" && (
        <Button content="Delete" icon="trash" negative onClick={handleDelete} />
      )}
      {user.role === "customer" && (
        <Button
          content={toggleBtn ? "Add to Inventory" : "Remove from Inventory"}
          onClick={handleToggleBtn}
          loading={addLoading}
          primary
        />
      )}
    </>
  );
};

const MetadataPane = ({ product, supplierName }) => (
  <>
    <Table.Row>
      <Table.Cell singleLine collapsing>
        Supplier
      </Table.Cell>
      <Table.Cell width="16">{supplierName}</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell singleLine>In Stock</Table.Cell>
      <Table.Cell>
        <Input defaultValue={product.quantity} transparent icon="edit" fluid />
      </Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell singleLine>Sold</Table.Cell>
      <Table.Cell>{product.sold}</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell singleLine>Shipped From</Table.Cell>
      <Table.Cell>
        <Input
          defaultValue={product.shippedFrom}
          transparent
          icon="edit"
          fluid
        />
      </Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell singleLine>Add to Warehouse</Table.Cell>
      <Table.Cell>{product.addedAt}</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell singleLine>Updated at</Table.Cell>
      <Table.Cell>{product.updatedAt}</Table.Cell>
    </Table.Row>
  </>
);
