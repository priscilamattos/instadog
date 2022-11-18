import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { UserContext } from "../../UserContext";
import LoginCreate from "./LoginCreate";
import LoginForgot from "./LoginForgot";
import LoginForm from "./LoginForm";
import LoginReset from "./LoginReset";

const Login = () => {
  const { login } = React.useContext(UserContext);
  console.log("🚀 ~ file: Login.jsx ~ line 12 ~ Login ~ login", login);
  if (login === true) return <Navigate to="/profile" />;
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="create" element={<LoginCreate />} />
        <Route path="forgot" element={<LoginForgot />} />
        <Route path="reset" element={<LoginReset />} />
      </Routes>
    </>
  );
};

export default Login;
