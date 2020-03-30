import React from "react";
import { Label, Rating, Button } from "semantic-ui-react";

export default ({ quantity, sold, rating }) => {
  const handleAddToWishlist = () => {};

  return (
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
      <Label icon="in cart" content={`In stock ${quantity}`} color="green" />
      <Label icon="in cart" content={`Sold ${sold}`} color="grey" />
      <Label icon="in cart" content={`Sold ${sold}`} color="grey" />
      <Button content="Add to Inventory" onClick={handleAddToWishlist} />
      <Rating maxRating="5" rating={rating} disabled />
    </>
  );
};
