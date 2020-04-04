import React, { useState } from 'react'
import { Form, Header, Button } from 'semantic-ui-react'

import { register } from "../services/users"

export default function Signup() {
  const [user, setUser] = useState({})

  const handleRegister = e => {
    console.log(user)
    register(
      
      e.target.confirmPassword.value,
      e.target.email.value,
      e.target.role.value,
    )
  }

  return (
    <div style={{ width: "25vw", margin: "10vh auto" }}>
      <Header as="h1" content="Register New Account" />
      <Form onSubmit={handleRegister}>
        <Form.Field control="input" name="username" value={user.username} onChange={(e) => setUser({...user, username: e.target.value})} label="Username" />
        <Form.Field control="input" name="password" value={user.password} onChange={(e) => setUser({...user, password: e.target.value})} type="password" label="Password" />
        <Form.Field control="input" name="confirmPassword" value={user.confirmPassword} onChange={(e) => setUser({...user, confirmPassword: e.target.value})}  type="password" label="Confirm Password" />
        <Form.Field control="input" name="email" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})}  type="email" label="Email" />
        <Form.Field
        control="select"
          name="role"
          value={user.role} 
          onChange={(e) => setUser({...user, role: e.target.value})} 
          // options={[
          //   { key: "C", text: 'Customer', value: 'customer' },
          //   { key: "S", text: 'Supplier', value: 'supplier' },
          // ]}
          label="Role"
        >
          <option>Customer</option>
          <option>Supplier</option>
        </Form.Field>
        <Button content="Signup" primary />
      </Form>
    </div >
  )
}
