import styles from "../css/Header.module.css";
import { Link } from "react-router-dom";
import { ReactComponent as Dogs } from "../assets/dogs.svg";
import { UserContext } from "../UserContext";
import { useContext } from "react";

const Header = () => {
  const { data } = useContext(UserContext);
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        {data ? (
          <Link className={styles.login} to="/profile">
            {data.name}
          </Link>
        ) : (
          <Link className={styles.login} to="/login">
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
