import React, { useEffect, useNavigate } from "react";

import { PASSWORD_RESET } from "../../api";
import useFetch from "../../hooks/useFetch";
import useForm from "../../hooks/useForm.jsx";
import Button from "../forms/Button.jsx";
import Input from "../forms/Input.jsx";
import Error from "../Helper/Error";
import Head from "../Helper/Head";

const LoginReset = () => {
  const [login, setLogin] = React.useState("");
  const [key, setKey] = React.useState("");
  const password = useForm();
  const { error, loading, request } = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get("key");
    const login = params.get("login");
    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    if (password.validate()) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value,
      });
      const { response } = await request(url, options);
      if (response.ok) navigate("/login");
    }
  }

  return (
    <section className="animeLeft">
      <Head title="Reset password" />
      <h1 className="title">Reset Password</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="New password"
          type="password"
          name="password"
          {...password}
        />
        {loading ? <Button>Sending...</Button> : <Button>Reset</Button>}
      </form>
      <Error error={error} />
    </section>
  );
};

export default LoginReset;
