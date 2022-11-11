import React from "react";
import { Link } from "react-router-dom";

import { TOKEN_POST } from "../../api";
import { USER_GET } from "../../api";
import UseForm from "../../hooks/UseForm";
import Button from "../forms/Button";
import Input from "../forms/Input";
import { useContext } from "react";
import { UserContext } from "./../../UserContext";

const LoginForm = () => {
  const username = UseForm();
  const password = UseForm();
  const { userLogin } = useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
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
  }
};
export default LoginForm;
