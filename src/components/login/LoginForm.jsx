import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";

import { TOKEN_POST } from "../../api";
import { USER_GET } from "../../api";
import UseForm from "../../hooks/UseForm";
import Button from "../forms/Button";
import Error from "../Helper/Error";
import Input from "../forms/Input";
import { UserContext } from "./../../UserContext";
import styles from "./../../css/LoginForm.module.css";
import stylesBtn from "../forms/Button.module.css";

const LoginForm = () => {
  const username = UseForm();
  const password = UseForm();
  const { userLogin, error, loading } = useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <button disabled>Carregando...</button>
        ) : (
          <button>Entrar</button>
        )}
        <Error error={error} />
      </form>
      <Link className={styles.forgot} to="/login/forgot">
        Forgot password?
      </Link>
      <div className={styles.signin}>
        <h2 className={styles.subtitle}>Sign In</h2>
        <p>Not a member? Sign Up</p>
        <Link className={stylesBtn.button} to="/login/create">
          Create Account
        </Link>
      </div>
    </section>
  );
};
export default LoginForm;
