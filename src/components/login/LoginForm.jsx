// import { TOKEN_POST } from "../../api";
// import { USER_GET } from "../../api";
import UseForm from "../../hooks/useForm";
import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";

// import Button from "../forms/Button";
import stylesBtn from "../forms/Button.module.css";
import Input from "../forms/Input";
import Error from "../Helper/Error";
// import Head from "../Helper/Head";
import styles from "./../../css/LoginForm.module.css";
import { UserContext } from "./../../UserContext";

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
        <Input label="User" type="text" name="username" {...username} />
        <Input label="Password" type="password" name="password" {...password} />
        {loading ? (
          <button disabled>Loading...</button>
        ) : (
          <button>Entrar</button>
        )}
        <Error error={error && 'Invalid data.'} />
      </form>
      <Link className={styles.forgot} to="/login/forgot">
        Forgot password?
      </Link>
      <div className={styles.signin}>
        <h2 className={styles.subtitle}>Sign In</h2>
        <p>Not a member? Sign Up.</p>
        <Link className={stylesBtn.button} to="/login/signup">
          Create Account
        </Link>
      </div>
    </section>
  );
};
export default LoginForm;
