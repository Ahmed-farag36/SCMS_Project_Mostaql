import React, { useState, useEffect } from "react";
import { Card, Header, Label, Button, Modal, Rating } from "semantic-ui-react";
import { Link } from "react-router-dom";

import AddProductForm from "../components/AddProductForm";

import { getAllForSupplier } from "../services/products";

export default () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllForSupplier("100").then(products => {
      setProducts(products);
    });
  }, []);

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
              key={product.id}
              header={product.title}
              image={product.images[0]}
              extra={extra}
              centered
              description={product.description}
              meta={product.category}
              as={Link}
              to={`/products/${product.id}`}
            />
          );
        })}
      </Card.Group>
      <Modal
        trigger={<Button content="Add Product" icon="plus" primary />}
        closeIcon
        as={AddProductForm}
      />
    </div>
  );
};
