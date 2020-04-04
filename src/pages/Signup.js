import React, { useState } from "react";
import { Form, Header, Button, Label, Message } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import { signUp } from "../services/users";

export default function Signup() {
  const [error, setError] = useState("");
  const { push } = useHistory();
  const { register, handleSubmit } = useForm();

  const handleRegister = ({
    username,
    password,
    confirmPassword,
    email,
    role
  }) => {
    signUp(username, password, confirmPassword, email, role).then(data => {
      if (data.message === `Registered successfully`) {
        push("/users/login", data);
      } else {
        setError(data.error);
      }
    });
  };

  return (
    <div style={{ width: "25vw", margin: "10vh auto" }}>
      <Header as="h1" content="Register New Account" />
      {error && <Message content={error} negative />}
      <Form onSubmit={handleSubmit(handleRegister)}>
        <Label content="Username" basic />
        <input name="username" ref={register} />
        <Label content="Password" basic />
        <input name="password" type="password" ref={register} />
        <Label content="Confirm Password" basic />
        <input name="confirmPassword" type="password" ref={register} />
        <Label content="Email" basic />
        <input name="email" type="email" ref={register} />
        <Label content="Role" basic />
        <select name="role" ref={register}>
          <option value="customer">Customer</option>
          <option value="supplier">Supplier</option>
        </select>
        <Button content="Signup" primary />
      </Form>
    </div>
  );
}
