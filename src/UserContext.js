import { getSuggestedQuery } from "@testing-library/react";
import React from "react";
import { useState } from "react";
import { TOKEN_POST } from "./api";
import { USER_GET } from "./api";

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = useState(null);
  const [login, setLogin] = useState(null);
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(null);

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLogin(true);
    console.log(json);

    async function userLogin(username, password) {
      const { url, options } = TOKEN_POST({ username, password });
      const tokenRes = await fetch(url, options);
      const { token } = await tokenRes.json();
      window.localStorage.setItem("token", token);
      getSuggestedQuery(token);
    }

    return (
      <UserContext.Provider value={{ userLogin, data }}>
        {children}
      </UserContext.Provider>
    );
  }
};

export default UserContext;
