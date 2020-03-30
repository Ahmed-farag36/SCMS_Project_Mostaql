import React from "react";
import { Form, Header } from "semantic-ui-react";

export default ({ inventory }) => {
  const handleSubmit = () => {};

  return (
    <Form
      style={{ backgroundColor: "white", padding: 20 }}
      onSubmit={handleSubmit}
    >
      <Header size="medium" content="Inquiry Products" />
      {inventory.map(product => (
        <>
          <Header size="small" content={product.title} />
        {/* // <Form.Group> */}
          {/* <Form.Input label="Product Title" value={product.title} /> */}
          <Form.Input label="Quantity" type="number" min="0" />
        {/* // </Form.Group> */}
        </>
      ))}
      <Form.Button primary>Submit</Form.Button>
    </Form>
  );
};
