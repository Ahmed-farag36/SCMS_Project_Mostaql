import React, { useState, useEffect } from "react";
import { Header, Search, Card, Pagination } from "semantic-ui-react";
import { Link } from "react-router-dom";

import CardExtra from "../components/CardExtra";

import useQuery from "../hooks/useQuery";

import { getAll } from "../services/products";

export default props => {
	const [searchValue, setSearchValue] = useState("");
	const [searchLoading, setSearchLoading] = useState(false);
	const [searchResults, setSearchResults] = useState([]);
	const { data: products, loading } = useQuery(getAll);

	if (loading) return <h1>loading...</h1>;

	const handleSearch = () => {};
	const handleResultSelect = () => {};

	const renderProducts = products.map(
		({ quantity, sold, _id, title, rating, images, description, category }) => {
			return (
				<Card
					key={_id}
					header={title}
					image={images[0]}
					extra={<CardExtra quantity={quantity} sold={sold} rating={rating} />}
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
