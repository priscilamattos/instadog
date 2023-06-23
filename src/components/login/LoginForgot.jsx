import React from "react";
import Input from "../forms/Input.jsx";
import Button from "../forms/Button.jsx";
import useForm from "../../hooks/useForm.jsx";
import useFetch from "../../hooks/useFetch";
import { PASSWORD_LOST } from "../../api.js";
import Error from "../Helper/Error.js";
import Head from "../Helper/Head";

const LoginForgot = () => {
  const login = useForm();
  const { data, loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace("lost", "reset"),
      });
      request(url, options);
    }
  }
  return (
    <section>
      <Head title="Forgot password" />
      <h1 className="title">Forgot password?</h1>
      {data ? (
        <p style={{ color: "#4c1" }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email/ Username" type="text" name="login" {...login} />
          {loading ? (
            <Button disabled>Sending...</Button>
          ) : (
            <Button>Send Email</Button>
          )}
        </form>
      )}

      <Error error={error} />
    </section>
  );
};

export default LoginForgot;
