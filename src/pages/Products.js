import React from "react";
import { Header, Card } from "semantic-ui-react";
import { Link } from "react-router-dom";

import CardExtra from "../components/CardExtra";

import useQuery from "../hooks/useQuery";

import { getAll } from "../services/products";

export default props => {
  const { data: products, loading } = useQuery(getAll);

  if (loading) return <h1>loading...</h1>;

  const renderProducts = products.map(
    ({ quantity, sold, _id, title, rating, images, description, category }) => {

      return (
        <Card
          key={_id}
          header={title}
          image=/*{ images[0] }*/"/testImg.webp"
          extra={
            <CardExtra
              quantity={quantity}
              sold={sold}
              productId={products._id}
            />
          }
          centered
          description={description}
          meta={category}
          as={Link}
          to={`/products/${_id}`}
        />
      );
    }
  );

  return (
    <>
      <Header as="h1" content="Products" />
      <Card.Group>{renderProducts}</Card.Group>
    </>
  );
};
