import React, { createContext, useState, useEffect } from "react";

import { getUser } from "../services/users";

export const UserContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  console.log(user);

  useEffect(() => {
    getUser().then(user => setUser(user));
  }, []);

  return (
    <UserContext.Provider value={{ user /* , login */ }}>
      {children}
    </UserContext.Provider>
  );
}

export default AuthProvider;
