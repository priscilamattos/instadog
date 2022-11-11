import React from "react";
import { Link } from "react-router-dom";

import { TOKEN_POST } from "../../api";
import { USER_GET } from "../../api";
import UseForm from "../../hooks/UseForm";
import Button from "../forms/Button";
import Input from "../forms/Input";

const LoginForm = () => {
  const username = UseForm();
  const password = UseForm();

  React.useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      getUser(token);
    }
  }, []);

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      const { url, options } = TOKEN_POST({
        username: username.value,
        password: password.value,
      });

      const response = await fetch(url, options);
      const json = await response.json();

      window.localStorage.setItem("token", json.token);
      getUser(json.token);
    }
  }
  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="User" type="text" name={username} {...username} />
        <Input label="Password" type="password" {...password} />
        <Button label="Send" />
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  );
};

export default LoginForm;
