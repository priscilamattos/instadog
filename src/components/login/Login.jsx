import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import styles from "../../css/Login.module.css";
import { UserContext } from "../../UserContext";
import LoginCreate from "./LoginCreate";
import LoginForgot from "./LoginForgot";
import LoginForm from "./LoginForm";
import LoginReset from "./LoginReset";
import NotFound from "../NotFound";

const Login = () => {
  const { login } = React.useContext(UserContext);
  if (login === true) return <Navigate to="/user" />;
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="signup" element={<LoginCreate />} />
          <Route path="forgot" element={<LoginForgot />} />
          <Route path="reset" element={<LoginReset />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
