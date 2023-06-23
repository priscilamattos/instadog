import { useContext } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Dogs } from "../assets/dogs.svg";
import styles from "../css/Header.module.css";
import { UserContext } from "../UserContext";

const Header = () => {
  const { data } = useContext(UserContext);
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        {data ? (
          <Link className={styles.login} to="/user">
            {data.name}
          </Link>
        ) : (
          <Link className={styles.login} to="/login">
            Login / Sign up
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
