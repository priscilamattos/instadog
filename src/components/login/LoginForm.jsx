import React from "react";
import { Link } from "react-router-dom";

import UseForm from "../../hooks/UseForm";
import Button from "../forms/Button";
import Input from "../forms/Input";

const LoginForm = () => {
  const username = UseForm();
  const password = UseForm();
  console.log(username.value);
  const handleSubmit = (event) => {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      fetch("https://dogsapi.origamid.dev/json/jwt-auth/v1/token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(),
      }).then((res) => {
        console.log("response");
        return res.json();
      });
      // .then((json) => {
      //   console.log(json);
      // });
    }
  };
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
