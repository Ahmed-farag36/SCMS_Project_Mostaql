import React, { useState, useEffect } from "react";
import { Header, Search, Card, Pagination } from "semantic-ui-react";
import { Link } from "react-router-dom";

import CardExtra from "../components/CardExtra";

import { getAll } from "../services/products";

export default props => {
  const [searchValue, setSearchValue] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAll().then(products => {
      setProducts(products);
    });
  });

  const handleSearch = () => {};
  const handleResultSelect = () => {};

  const renderProducts = products.map(
    ({ quantity, sold, id, title, rating, images, description, category }) => {
      return (
        <Card
          key={id}
          header={title}
          image={images[0]}
          extra={<CardExtra quantity={quantity} sold={sold} rating={rating} />}
          centered
          description={description}
          meta={category}
          as={Link}
          to={`/products/${id}`}
        />
      );
    }
  );

  return (
    <>
      <Header as="h1" content="Products" />
      <Search
        category
        results={searchResults}
        loading={searchLoading}
        value={searchValue}
        onSearchChange={handleSearch}
        onResultSelect={handleResultSelect}
        {...props}
      />
      <Card.Group>{renderProducts}</Card.Group>
      <Pagination totalPages="5" activePage="1" />
    </>
  );
};
