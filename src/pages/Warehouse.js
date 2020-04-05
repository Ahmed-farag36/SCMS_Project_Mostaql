import React, { useState, useContext } from "react";
import { Card, Header, Label, Button, Modal, Rating } from "semantic-ui-react";
import { Link } from "react-router-dom";

import { UserContext } from "../components/AuthProvider";
import AddProductForm from "../components/AddProductForm";

import { getAllForSupplier, addOne } from "../services/products";

import useQuery from "../hooks/useQuery";
import useMutation from "../hooks/useMutation";

export default () => {
  const user = useContext(UserContext);
  const { data: products, loading, setData: setProducts } = useQuery(
    getAllForSupplier,
    user._id
  );
  const { data, post } = useMutation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (loading) return <h1>loading...</h1>;

  const handleAddProduct = product => {
    post(addOne, product);
    setProducts([...product, data]);
  };

  return (
    <div>
      <Header as="h1">Warehouse</Header>
      <Header as="h2">Your products list</Header>
      <Card.Group>
        {products.map((product, i) => {
          const extra = (
            <>
              <Label
                icon="star"
                content="Featured"
                color="yellow"
                ribbon
                style={{ position: "absolute", top: "3%" }}
              />
              <Label
                icon="arrow down"
                content="Running out"
                color="red"
                ribbon
                size="tiny"
                style={{ position: "absolute", top: "10%" }}
              />
              <Label
                icon="in cart"
                content={`In stock ${product.quantity}`}
                color="green"
              />
              <Label
                icon="in cart"
                content={`Sold ${product.sold}`}
                color="grey"
              />
              <Rating maxRating="5" rating={product.rating} disabled />
            </>
          );
          return (
            <Card
              key={product._id}
              header={product.title}
              image={product.images[0]}
              extra={extra}
              centered
              description={product.description}
              meta={product.category}
              as={Link}
              to={`/products/${product._id}`}
            />
          );
        })}
      </Card.Group>
      <Button
        content="Add Product"
        onClick={() => setIsModalOpen(true)}
        icon="plus"
        primary
      />
      <Modal
        open={isModalOpen}
        as={AddProductForm}
        setProducts={setProducts}
        setIsModalOpen={setIsModalOpen}
        handleAddProduct={handleAddProduct}
      />
    </div>
  );
};
