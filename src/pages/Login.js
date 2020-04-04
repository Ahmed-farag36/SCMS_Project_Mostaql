import React from "react";
import { Form, Header, Button } from "semantic-ui-react";
import { useForm } from "react-hook-form";

export default function Login() {
	const { register, handleSubmit } = useForm();

	const handleFormSubmit = data => {
		console.log(data);
	};

	return (
		<div style={{ width: "25vw", margin: "10vh auto" }}>
			<Header as="h1" content="Login" />
			<Form>
				<Form.Field control="input" label="Username" />
				<Form.Field control="input" type="password" label="Password" />
				<Button content="Login" primary />
			</Form>
		</div>
	);
}
