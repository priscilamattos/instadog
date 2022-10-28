import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Button from "../forms/Button";
import Input from "../forms/Input";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("https://dog.ceo/api/breeds/image/random", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => {
        console.log("response");
        return res.json();
      })
      .then((json) => {
        console.log(json);
      });
  };

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="User" type="text" name={username} />
        <Input label="Password" type="password" name={password} />
        <Button label="Send" onClick={""} />
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  );
};

export default LoginForm;
