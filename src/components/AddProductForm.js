import React from "react";
import { Form, Header } from "semantic-ui-react";

export default () => {
  const handleSubmit = () => {};

  return (
    <Form
      style={{ backgroundColor: "white", padding: 10 }}
      onSubmit={handleSubmit}
    >
      <Header as="h2" content="Add New Product" />
      <Form.Field control="input" placeholder="Product title" />
      <Form.Field control="input" placeholder="Product category" />
      <Form.Field
        control="input"
        type="number"
        placeholder="Quantity in stock"
        min="0"
      />
      <Form.Field control="textarea" placeholder="Product description" />
      <Form.Field control="input" type="file" label="Upload images" />
    </Form>
  );
};
