import React from "react";
import { Form, Header, Button } from "semantic-ui-react";
import { useForm } from "react-hook-form";

export default ({ handleAddProduct, setIsModalOpen }) => {
  const { register, handleSubmit } = useForm();

  return (
    <Form
      style={{ backgroundColor: "white", padding: 10 }}
      onSubmit={handleSubmit(handleAddProduct)}
    >
      <Header as="h2" content="Add New Product" />
      <input ref={register} name="title" placeholder="Title" />
      <input ref={register} name="category" placeholder="Category" />
      <input ref={register} name="brand" placeholder="Brand" />
      <input ref={register} name="shippedFrom" placeholder="Shipped from" />
      <input ref={register} name="price" placeholder="Price" />
      <input ref={register} name="spec1" placeholder="Spec" />
      <input ref={register} name="spec2" placeholder="Spec" />
      <input ref={register} name="spec3" placeholder="Spec" />
      <input
        ref={register}
        name="quantity"
        type="number"
        placeholder="Quantity in stock"
        min="0"
      />
      <textarea ref={register} name="description" placeholder="Description" />
      <input type="file" label="Upload images" ref={register} name="image" />
      <Button content="Submit" primary />
      <Button content="Close" secondary onClick={() => setIsModalOpen(false)} />
    </Form>
  );
};
