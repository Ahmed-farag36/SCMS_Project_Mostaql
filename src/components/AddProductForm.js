import React, { useEffect } from "react";
import { Form, Header, Input, Button } from "semantic-ui-react";

import { addOne } from "../services/products";

import useMutation from "../hooks/useMutation";

export default props => {
	const { post, data: products } = useMutation();

	const handleSubmit = e => {
		const formData = new FormData();
		formData.append("title", e.target.title.value)
		formData.append("category", e.target.category.value)
		formData.append("brand", e.target.brand.value)
		formData.append("shippedFrom", e.target.shippedFrom.value)
		formData.append("price", e.target.price.value)
		formData.append("spec1", e.target.spec1.value)
		formData.append("spec2", e.target.spec2.value)
		formData.append("spec3", e.target.spec3.value)
		formData.append("quantity", e.target.quantity.value)
		formData.append("description", e.target.description.value)
		post(addOne, formData);
	};

	useEffect(() => {
		if (products) {
			props.setProducts(products);
			props.setIsModalOpen(false)
		}
	}, [products]);

	return (
		<Form
			style={{ backgroundColor: "white", padding: 10 }}
			onSubmit={handleSubmit}
		>
			<Header as="h2" content="Add New Product" />
			<Form.Field control="input" name="title" placeholder="Title" />
			<Form.Field control="input" name="category" placeholder="Category" />
			<Form.Field control="input" name="brand" placeholder="Brand" />
			<Form.Field
				control="input"
				name="shippedFrom"
				placeholder="Shipped from"
			/>
			<Form.Field control="input" name="price" placeholder="Price" />
			<Form.Field control="input" name="spec1" placeholder="Spec" />
			<Form.Field control="input" name="spec2" placeholder="Spec" />
			<Form.Field control="input" name="spec3" placeholder="Spec" />
			<Form.Field
				control="input"
				name="quantity"
				type="number"
				placeholder="Quantity in stock"
				min="0"
			/>
			<Form.Field
				control="textarea"
				name="description"
				placeholder="Description"
			/>
			<Form.Field control="input" type="file" label="Upload images" name="image" />
			<Button content="Submit" primary />
			<Button content="Close" secondary onClick={() => props.setIsModalOpen(false)} />
		</Form>
	);
};
