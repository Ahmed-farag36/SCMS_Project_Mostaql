import React, { useState } from "react";
import { Form, Header, Button, Label, Message } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import { login } from "../services/users";

export default function Login() {
  const [error, setError] = useState("");
  const { push } = useHistory();
  const { register, handleSubmit } = useForm();

  const handleFormSubmit = ({ username, password }) => {
    login(username, password).then(data => {
      console.log(data);
      if (data === `logged in successfully`) {
        push("/", data);
      } else {
        setError(data.error);
      }
    });
  };

  return (
    <div style={{ width: "25vw", margin: "10vh auto" }}>
      <Header as="h1" content="Login" />
      {error && <Message content={error} negative />}
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <Label content="Username" />
        <input name="username" ref={register} />
        <Label content="Password" />
        <input name="password" type="password" ref={register} />
        <Button content="Login" primary />
      </Form>
    </div>
  );
}
