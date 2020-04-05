import React, { useContext } from "react";
import { Form, Header, Label } from "semantic-ui-react";
import { useForm } from "react-hook-form";

import { UserContext } from "../components/AuthProvider";

export default ({ inventory, setIsModalOpen, handleInquireProduct }) => {
  const user = useContext(UserContext);
  const { register, handleSubmit } = useForm();

  const handleFormSubmit = products => {
    handleInquireProduct(user._id, inventory, products);
  };

  return (
    <Form
      style={{ backgroundColor: "white", padding: 20 }}
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <Header size="medium" content="Inquiry Products" />
      {inventory.map((product, i) => (
        <>
          <Header size="small" content={product.title} />
          <Label content="Quantity" basic />
          <input type="number" min="0" name={`qty${i}`} ref={register} />
        </>
      ))}
      <Form.Button primary>Submit</Form.Button>
      <Form.Button primary onClick={() => setIsModalOpen(false)}>
        Cancel
      </Form.Button>
    </Form>
  );
};
