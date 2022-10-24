import styles from "./Header.modules.css";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.header}>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </nav>
    </div>
  );
};

export default Header;
