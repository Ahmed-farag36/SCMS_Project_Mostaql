import React from "react";
import { Header, Image, Table, Button, Input, Tab } from "semantic-ui-react";
import { useParams } from "react-router-dom";

import Comments from "../components/Comments";

import useQuery from "../hooks/useQuery";

import { getOne } from "../services/products";

export default () => {
	const { productId } = useParams();
	const { data: product, loading } = useQuery(getOne, productId);

	if (loading) return <h1>loading...</h1>;
	console.log(product)

	const handleUpdate = () => {};
	const handleDelete = () => {};

	const specs = (
		<>
			<Table.Row>
				<Table.Cell>10</Table.Cell>
				<Table.Cell width="16">
					<Input
						defaultValue={product.spec1}
						icon="edit"
						transparent
						fluid
					/>
				</Table.Cell>
			</Table.Row>
			<Table.Row>
				<Table.Cell>10</Table.Cell>
				<Table.Cell width="16">
					<Input
						defaultValue={product.spec2}
						icon="edit"
						transparent
						fluid
					/>
				</Table.Cell>
			</Table.Row>
			<Table.Row>
				<Table.Cell>10</Table.Cell>
				<Table.Cell width="16">
					<Input
						defaultValue={product.spec3}
						icon="edit"
						transparent
						fluid
					/>
				</Table.Cell>
			</Table.Row>
			</>
	)


	return (
		<>
			<Header as="h1" content={product.title} />
			<Header size="tiny" content={product.category} />
			<Image src={product.images[0]} />
			<Table celled padded striped unstackable>
				<Table.Body>
					<Tab
						panes={[
							{
								menuItem: "Metadata",
								render: () => <MetadataPane product={product} />
							},
							{
								menuItem: "Specifications",
								render: () => specs
							},
							{
								menuItem: "Comments",
								render: () => <Comments />
							}
						]}
					/>
				</Table.Body>
			</Table>
			<Button content="Update" icon="edit" primary onClick={handleUpdate} />
			<Button content="Delete" icon="trash" negative onClick={handleDelete} />
		</>
	);
};

const MetadataPane = ({ product }) => (
	<>
		<Table.Row>
			<Table.Cell singleLine collapsing>
				Supplier
			</Table.Cell>
			{/* <Table.Cell width="16">{product.supplier.name}</Table.Cell> */}
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
