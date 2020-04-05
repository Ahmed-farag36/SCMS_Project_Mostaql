const HOST = "https://vy54w.sse.codesandbox.io";

export const getUser = () => {
  return fetch(`${HOST}/users`, {
    method: "GET",
    credentials: "include"
  }).then(res => {
    if (res.status === 200) {
      return res.json();
    } else {
      return {};
    }
  });
};

export const signUp = (username, password, confirmPassword, email, role) => {
  return fetch(`${HOST}/users/register`, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      username,
      password,
      confirmPassword,
      email,
      role
    })
  }).then(res => res.json());
};

export const login = (username, password) => {
  return fetch(`${HOST}/users/login`, {
    method: "POST",
    credentials: "include",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({ username, password })
  }).then(res => res.json());
};

export const logout = () => {
  return fetch(`${HOST}/users/logout`).then(res => res.json());
};
